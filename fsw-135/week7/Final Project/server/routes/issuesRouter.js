const express = require("express")
const issuesRouter = express.Router()
const Issue = require('../models/issue.js')


issuesRouter


  //Get all issues
  .get("/", (req, res, next) => {
    Issue.find((err, issues) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })


  //Get issues by users
  .get("/user/", (req, res, next) => {
    Issue.find(
      { user: req.user._id },
      (err, updatedIssue) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        console.log(updatedIssue);
        return res.status(201).send(updatedIssue)
      }
    )
  })

  //Add a new issue
  .post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })


  //Delete a issue
  .delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
      { _id: req.params.issueId },
      (err, deletedIssue) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
      }
    )
  })

   //Edit a issue
  .put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      req.body,
      { new: true },
      (err, updatedIssue) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
  })

  //Up Vote
  issuesRouter.put('/upVote/:issueId', (req, res, next) =>  {
    Issue.find({ _id: req.params.issueId }, (err, issue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      // console.log(issue[0].voters);
      var voter = issue[0].voters.findIndex((voter) => {
        return voter.user === req.user._id && voter.voted === "upvoted";
      });
      console.log(voter);
      if (voter < 0) {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          {
            $inc: {
              upVote: 1
              
            },
            $push: {
              voters: { user: req.user._id, voted: "upvoted" },
            },
          },
          { new: true },
          (err, updatedIssue) => {
            if (err) {
              res.status(500);
              return next(err);
            }
            return res.status(201).send(updatedIssue);
          }
        );
      } else {
        res.status(500);
        return next(new Error("You already upvoted this issue"));
      }
    });
  });

  //Down Vote
  issuesRouter.put('/downVote/:issueId', (req, res, next) =>  {
    Issue.find({ _id: req.params.issueId }, (err, issue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
    
      var voter = issue[0].voters.findIndex((voter) => {
        return voter.user === req.user._id && voter.voted === "downvoted";
      });
      console.log(voter);
      if (voter < 0) {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          {
            $inc: {
              downVote: 1
              
              
            },
            $push: {
              voters: { user: req.user._id, voted: "downvoted" },
            },
          },
          { new: true },
          (err, updatedIssue) => {
            if (err) {
              res.status(500);
              return next(err);
            }
            return res.status(201).send(updatedIssue);
          }
        );
      } else {
        res.status(500);
        return next(new Error("You already downvoted this issue"));
      }
    });
  });



module.exports = issuesRouter
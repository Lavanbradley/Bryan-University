const express = require("express")
const commentsRouter = express.Router()
const Comment = require('../models/comment.js')


commentsRouter

//Get all comments
.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

//Get comment by user 
.get("/user/", (req, res, next) => {
  Comment.find(
    { user: req.user._id },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedComment)
    }
  )
})


//Post a comment
.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

//Delete a comment
.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId },
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete comment: ${deletedComment.title}`)
    }
  )
})


//Edit a comment
.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentId },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedComment)
    }
  )
})


module.exports = commentsRouter
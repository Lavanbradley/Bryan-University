const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
  comment:{
    type: String,
    required: true
  },
  issueID: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)
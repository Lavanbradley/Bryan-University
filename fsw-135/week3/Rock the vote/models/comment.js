const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)
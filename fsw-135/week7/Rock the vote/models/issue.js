const mongoose = require('mongoose')
const Schema = mongoose.Schema


const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  issue: {
    type: String,
    required: true
  },
  upVote: {
    type: Number,
    default: 0
  },
  downVote: {
    type: Number,
    default: 0
  },
  voters: { 
    type: Array,
     default: [] 
    },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)
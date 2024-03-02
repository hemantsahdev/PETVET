const mongoose=require("mongoose");
const USERS=require("../user/user")
const ANSWERS=require("./answer");

const questionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    required: true,
  },
  upvoteCount: {
    type: Number,
    default: 0,
  },
  downvoteCount: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: USERS,
  },
  answers: [ANSWERS],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const QUESTIONS = mongoose.model("QUESTIONS", userSchema);

module.exports = QUESTIONS;

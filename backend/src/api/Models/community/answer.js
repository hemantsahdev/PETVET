const mongoose=require("mongoose")
const USERS=require("../user/user")

const answerSchema = new mongoose.Schema({
  answer: {
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ANSWERS= mongoose.model("ANSWERS",answerSchema);
module.exports=ANSWERS
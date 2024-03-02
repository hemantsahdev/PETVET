const mongoose=require("mongoose");
const USERS=require("../user/user")

const communitySchema = new mongoose.Schema({
  communityName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: USERS,
    },
  ],
});


const COMMUNITY = mongoose.model("COMMUNITY", userSchema);

module.exports = COMMUNITY;

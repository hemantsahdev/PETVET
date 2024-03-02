const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

const USERS=mongoose.model("USERS",userSchema);

module.exports=USERS;


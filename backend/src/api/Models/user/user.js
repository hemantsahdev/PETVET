const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:{
    type:String,
  },
  email:{
    type:String,
  },
  password:{
    type:String,
    required:true
  }
});

userSchema.index({username:1,email:1},{unique:true,sparse:true});

const USERS = mongoose.model("USERS", userSchema);

module.exports = USERS;


// indexing in mongoDB
// Indexes are data structures that store a small portion of the collection’s 
// data set in an easy-to-traverse form. Indexes improve the speed of data retrieval 
// operations on a MongoDB collection by providing efficient access paths to documents.
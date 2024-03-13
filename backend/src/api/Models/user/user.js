const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  pincode: {
    type: String,
    required: true,
  },
  city: String,
  state: String,
  date: {
    type: Date,
    default: Date.now,
  },
  client: {
    type: Boolean,
    default: false,
  },
  vet: {
    type: Boolean,
    default: false,
  },
  mobile: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid 10-digit mobile number!`,
    },
  },
  gender: {
    type: String,
    required: function () {
      return this.vet === true;
    },
  },
  speciality: {
    type: String,
    required: function () {
      return this.vet === true;
    },
  },
});

const USERS = mongoose.model("USERS", userSchema);

module.exports = USERS;

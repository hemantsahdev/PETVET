const mongoose =require("mongoose");

const veterinarianSchema = new mongoose.Schema({
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

//   it will store the URLs of the images stored in firebase
  certificates:{
    type:String
  }
});

const VETERINARIAN=mongoose.model("VETERINARIAN",veterinarianSchema);

module.exports=VETERINARIAN;
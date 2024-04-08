const mongoose = require("mongoose");

// const availableSlotsSchema = new mongoose.Schema({
//   date: {
//     type: Date,
//     required: true
//   },
//   slots: [
//     {
//       startTime: { type: Date, required: true },
//       endTime: { type: Date, required: true }
//     }
//   ]
// });

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
    // required: true,
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
  },
  speciality: {
    type: String,
  },

  availableSlots: [
    {
      date: {
        type: Date,
        required: true,
      },
      slots: [
        {
          startTime: { type: Date, required: true },
          endTime: { type: Date, required: true },
        },
      ],
    },
  ],
});

const VETERINARIAN = mongoose.model("VETERINARIAN", veterinarianSchema);

module.exports = VETERINARIAN;

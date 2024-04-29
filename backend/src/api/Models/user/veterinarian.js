const mongoose = require("mongoose");
const PETPARENT = require("./petParent");

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
  profilePic:{
    type:String
  },
  pincode: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
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

  // need to filled in addSlots section
  pricePerSlot:{
    type:Number,
  },

  availableSlots: [
    {
      date: {
        type: Date,
        required: true,
      },
      slots: [
        {
          date: {
            type: Date,
            required: true,
          },
          startTime: {
            type: Date,
            required: true,
          },
          endTime: {
            type: Date,
            required: true,
          },
        },
      ],
    },
  ],
  
  addedSlots:[
    {
      date: {
        type: Date,
        required: true,
      },
      slots: [
        {
          startTime: {
            type: Date,
            required: true,
          },
          endTime: {
            type: Date,
            required: true,
          },
        },
      ],
    }
  ],

  bookedSlots:[
    {
      
      slot: {
        date: {
          type: Date,
          required: true,
        },
        startTime: {
          type: Date,
          required: true,
        },
        endTime: {
          type: Date,
          required: true,
        },
      },
     
      mode: {
        type: String,
        enum: ['offline', 'online'],
        
      },
    }
  ],

  appointments:[
    {
      
      petParent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PETPARENT,
        required: true,
      },
      
      startTime: {
        type: Date,
        required: true,
      },
      endTime: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        enum: ['pending', 'inQueue', 'cancelled'],
        default: 'pending',
      },
      payment: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        
      },
      mode: {
        type: String,
        enum: ['offline', 'online'],
       
      },
      
    }
  ]

});

const VETERINARIAN = mongoose.model("VETERINARIAN", veterinarianSchema);

module.exports = VETERINARIAN;

const mongoose =require ("mongoose");

const petParentSchema = new mongoose.Schema({
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
  city: String,
  state: String,
  date: {
    type: Date,
    default: Date.now,
  },
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
});

const PETPARENT = mongoose.model("PETPARENT", petParentSchema);

module.exports = PETPARENT;
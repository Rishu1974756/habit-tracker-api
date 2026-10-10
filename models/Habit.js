const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema(
  {
    habit: {
      type: String,
      required: true,
      trim: true
    },
    targetDays: {
      type: Number,
      required: true,
      min: 1,
      max: 365
    },
    type: {
      type: String,
      enum: ['health', 'study', 'skill', 'other'],
      default: 'other'
    },
    doneToday: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: Date,
      default: Date.now 
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Habit", habitSchema);

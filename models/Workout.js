const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: String,
    trim: true,
    required: "day is Required"
  },

  exercises: {
    type: String,
    trim: true,
    required: "exercises is Required"
  },
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

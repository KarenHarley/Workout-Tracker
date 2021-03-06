const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(), //create a new instance of the server Date info
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "type is Required",
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      //  required: "exercises is Required"
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

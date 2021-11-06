const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlansSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const Plans = mongoose.model("Plans", PlansSchema);

module.exports = Plans;
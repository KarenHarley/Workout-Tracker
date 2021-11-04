const router = require("express").Router();
const Workout  = require("../../models/Workout");

//View the combined weight of multiple exercises from the past
// seven workouts on the stats page.
router.get("/weight", (req, res) => {
    Workout.find({})
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  });
//View the total duration of each workout from the past 
//seven workouts on the stats page.

module.exports = router;
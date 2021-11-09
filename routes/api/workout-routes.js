const router = require("express").Router();

const Workout = require("../../models/Workout");

//create a workout
router.post("/workouts", ({ body }, res) => {
  console.log("Hello workout post route");
  console.log("Hi body" + body);
  Workout.create({})
    .then((dbTransaction) => {
      console.log("Sending response");
      console.log(dbTransaction);
      res.json(dbTransaction);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// add an exercise

router.put("/workouts/:id", (req, res) => {
  console.log("Hello");
  let updates = req.body; //we set a variable equal to the entire req.body
  console.log(updates);
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: updates } },
    { new: true }
  )
    .then((updatedWorkout) => res.json(updatedWorkout))
    .catch((err) => res.status(400).json("Error: " + err));
});

//View the combined weight of multiple exercises from the past
// seven workouts on the stats page.
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
//View the total duration of each workout from the past
//seven workouts on the stats page.
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

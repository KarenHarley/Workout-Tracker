const router = require("express").Router();
const Workout  = require("../../models/Workout");
const Plans  = require("../../models/Plans");



router.post("/submit", ({ body }, res) => {
 Exercise.create(body)
    .then(({ _id }) => Plans.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/createPlan", ({ body }, res) => {
 Plans.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//View the combined weight of multiple exercises from the past
// seven workouts on the stats page.
router.get("/weight", (req, res) => {
  console.log("Inside get route")
    Workout.find({})
      .then(result => {
        console.log(result)
        res.json(result);
      })
      .catch(err => {
        console.log("Error in get route"+ err)
        res.json(err);

      });
  });
//View the total duration of each workout from the past 
//seven workouts on the stats page.



module.exports = router;
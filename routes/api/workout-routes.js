const router = require("express").Router();
const Workout  = require("../../models/Workout");



router.post("/create", ({ body }, res) => {
 Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//View the combined weight of multiple exercises from the past
// seven workouts on the stats page.
router.get("/workouts/range", (req, res) => {
  console.log("Inside get route")
    Workout.find({}).limit(7)
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
const router = require('express').Router();

const workoutRoutes = require('./workout-routes');

router.use('/', workoutRoutes);

module.exports = router;
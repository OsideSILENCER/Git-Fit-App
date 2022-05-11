const router = require("express").Router();
const usersRouter = require("./users-router");
const workoutRouter = require("./workout_days");

router.use("/users", usersRouter);
router.use("/workout", workoutRouter);

module.exports = router;

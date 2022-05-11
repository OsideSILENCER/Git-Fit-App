const router = require("express").Router();
const usersRouter = require("./users-router");
const workout_daysRouter = require("./workout_days-router");

router.use("/users", usersRouter);
router.use("/workout_days-router", workout_daysRouter);

module.exports = router;

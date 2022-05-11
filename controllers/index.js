const router = require("express").Router();
const homeRouter = require("./home-router");
const apiRouter = require("./api");
router.use("/", homeRouter);
router.use("/api", apiRouter);
router.use('workout_days-router')
module.exports = router;

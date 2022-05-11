const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRouter = require("./api");
router.use("/", homeRoutes);
router.use("/api", apiRouter);
router.use('workoutRoutes' workoutRoutes)
module.exports = router;

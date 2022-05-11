const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRouter = require("./api");
router.use("/", homeRoutes);
router.use("/api", apiRouter);
module.exports = router;

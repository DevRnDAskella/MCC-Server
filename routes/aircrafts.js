const aircraftsRouter = require("express").Router();
const { getAircrafts } = require("../controllers");

aircraftsRouter.get("/api/aircrafts/", getAircrafts);

module.exports = aircraftsRouter;

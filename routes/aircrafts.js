const aircraftsRouter = require("express").Router();
const { getAircrafts, setAircraftData } = require("../controllers");

aircraftsRouter.get("/api/aircrafts/", getAircrafts);
aircraftsRouter.post("/api/aircrafts/:regNumber", setAircraftData);

module.exports = aircraftsRouter;

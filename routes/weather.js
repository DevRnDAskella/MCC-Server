const weatherRouter = require("express").Router();
const { getWeather } = require("../controllers");

weatherRouter.get("/weather", getWeather);

module.exports = weatherRouter;

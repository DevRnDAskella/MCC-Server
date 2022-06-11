const { getMetar, saveMetar, getWeather } = require("./weatherController");
const { getAccess, getLogout } = require("./authController");
const { getAircrafts } = require("./aircraftsController");

module.exports = {
  getMetar,
  saveMetar,
  getAccess,
  getLogout,
  getWeather,
  getAircrafts
};

const { getMetar, saveMetar, getWeather } = require("./weatherController");
const { getAccess, getLogout } = require("./authController");

module.exports = {
  getMetar,
  saveMetar,
  getAccess,
  getLogout,
  getWeather
};

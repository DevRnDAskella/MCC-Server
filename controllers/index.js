const { getMetar, saveMetar } = require("./weatherController");
const { getAccess, getLogout } = require("./authController");

module.exports = {
  getMetar,
  saveMetar,
  getAccess,
  getLogout,
};

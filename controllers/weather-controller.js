const { getWeather } = require("../services/api/");

exports.getMetar = async (req, res) => {
  const { icaoCode } = req.params;
  const response = await getWeather(icaoCode);

  res.send(response.data);
};
const { Aircraft } = require("../models/");

exports.getAircrafts = async (req, res) => {
  const data = await Aircraft.find({}).exec();
  
  res.json(data);
};

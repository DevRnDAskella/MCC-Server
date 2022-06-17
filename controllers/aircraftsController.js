const { Aircraft, Briefcase, Efb } = require("../models/");
const { saveToDbAircraftData } = require("../services/helpers");

exports.getAircrafts = async (req, res) => {
  const data = await Aircraft.find({}).exec();

  res.json(data);
};

exports.setAircraftData = async (req, res) => {
  try {
    await saveToDbAircraftData(req, (models = { Aircraft, Briefcase, Efb }));
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  }
};

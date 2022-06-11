const { model, Schema } = require("mongoose");

const metarSchema = new Schema({
  type: {
    type: String,
    default: "metar",
  },
  rawData: {
    type: String,
    required: true,
  },
  timeCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Metar = model("metars", metarSchema);

module.exports = Metar;

const { model, Schema } = require("mongoose");

const aircraftSchema = new Schema({
  regNumbers: {
    type: [],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  owners: {
    type: Array,
    default: ["Azimuth"],
  },
});

const Aircraft = model("aircrafts", aircraftSchema);

module.exports = Aircraft;
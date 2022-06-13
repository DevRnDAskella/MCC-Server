const { model, Schema } = require("mongoose");

const AircraftTypeSchema = new Schema({
  name: {
    icao: {}, // SU95
    local: {}, // RRJ95
    common: {}, // Sukhoi Superjet 100
  },
  modifications: [Schema.Types.ObjectId],
});

const AircraftType = model("aircraft-types", AircraftTypeSchema);

module.exports = AircraftType;

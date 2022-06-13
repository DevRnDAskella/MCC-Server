const { model, Schema } = require("mongoose");

const aircraftModificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  weightLimits: {
    feulTank: {},
    MLW: {},
    MTOW: {},
    MTW: {}, // === MRW
    MZFW: {},
  },
});

const AircraftModification = model(
  "aircraft-modifications",
  aircraftModificationSchema
);

module.exports = AircraftModification;

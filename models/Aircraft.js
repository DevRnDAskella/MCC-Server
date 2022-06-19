const { model, Schema } = require("mongoose");

const aircraftSchema = new Schema({
  regNumbers: {
    type: [String],
    required: true,
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "aircraft_types",
    required: true,
  },
  modification: {
    type: Schema.Types.ObjectId,
    ref: "aircraft_modifications",
    required: true,
  },
  owners: [{ type: Schema.Types.ObjectId, ref: "organisations" }],
  faults: [
    {
      desc: {
        type: String,
      },
      status: {
        type: String,
        enum: ["actual", "non-actual"],
      },
      importance: {
        type: String,
        enum: ["high", "medium", "low"],
      },
    },
  ],
  equipment: {
    efb: {
      isInStock: {
        type: Boolean,
      },
      listEfb: [{ type: Schema.Types.ObjectId, ref: "efbs" }],
    },
    briefcase: {
      isInStock: {
        type: Boolean,
      },
      listBriefcase: [{ type: Schema.Types.ObjectId, ref: "briefcases" }],
    },
    aip: {
      isInStock: {
        type: Boolean,
      },
      listAip: [{ type: Schema.Types.ObjectId, ref: "aips" }],
    },
  },
});

module.exports = model("aircrafts", aircraftSchema);

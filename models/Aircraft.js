const { model, Schema } = require("mongoose");

const aircraftSchema = new Schema({
  regNumbers: {
    type: [String],
    required: true,
  },
  type: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  modification: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  owners: [Schema.Types.ObjectId],
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
      isInStock: {},
      listEfb: {},
    },
    briefcase: {
      isInStock: {},
      listBriefcase: {},
    },
    aip: {
      isInStock: {},
      listAip: {},
    },
  },
});

const Aircraft = model("aircrafts", aircraftSchema);

module.exports = Aircraft;

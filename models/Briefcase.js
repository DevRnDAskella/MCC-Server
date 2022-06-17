const { model, Schema } = require("mongoose");

const briefcaseSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  listAip: {
    type: [Schema.Types.ObjectId],
  },
});

const Briefcase = model("briedcases", briefcaseSchema);

export default Briefcase;
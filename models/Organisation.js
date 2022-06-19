const { model, Schema } = require("mongoose");

const organisationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contacts: [{ type: Schema.Types.ObjectId, ref: "contacts" }],
});

module.exports = model("organisations", organisationSchema);

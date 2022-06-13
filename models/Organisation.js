const { model, Schema } = require("mongoose");

const organisationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contacts: [Schema.Types.ObjectId],
});

const Organisation = model("organisations", organisationSchema);

module.exports = Organisation;

const { model, Schema } = require("mongoose");

const efbSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
});

const Efb = model("efbs", efbSchema);

export default Efb;
let mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    
    city: String,
    ts: String,
    aqius: Number,
    mainus: String,
    aqicn: Number,
    maincn:String

  },
  { timestamps: true }
);

module.exports = mongoose.model("airQuality", schema);
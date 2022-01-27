const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  date : { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Post", schema);

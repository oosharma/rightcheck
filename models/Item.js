const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  },
  author: {
    type: String,
    defaul: "anonymous"
  },
  votes: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);

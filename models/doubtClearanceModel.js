const mongoose = require("mongoose");

const schema = mongoose.Schema;

const questionSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    comments: {
      type: Array({
        user: String,
        comment: String,
      }),
      required: true,
    },
    publisher: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("question", questionSchema);

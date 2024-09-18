const mongoose = require("mongoose");

const questionDataSchema = mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
      default: "codeblog",
    },
    points: {
      type: String,
    },
    questions: {
      type: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("questionData", questionDataSchema);

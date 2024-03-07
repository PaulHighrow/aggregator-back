const { Schema, model } = require("mongoose");

const lessons = new Schema(
  {
    level: {
      type: String,
      required: [true, "No level"],
    },
    lesson: {
      type: String,
      required: [true, "No lesson number"],
    },
    topic: { type: String, required: [true, "No topic"] },
    keysEn: {
      type: String,
      required: [true, "No english keywords"],
    },
    keysUa: {
      type: String,
      required: [true, "No ukrainian keywords"],
    },
    pdf: [String],
    video: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Lessons = model("lessons", lessons);

module.exports = Lessons;

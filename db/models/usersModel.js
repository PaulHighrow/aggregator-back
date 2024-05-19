const { Schema, model } = require("mongoose");

const users = new Schema(
  {
    name: {
      type: String,
    },
    mail: {
      type: String,
      required: [true, "No mail"],
    },
    password: {
      type: String,
      required: [true, "No password"],
    },
    pupilId: { type: String, required: [true, "No pupilId"] },
    age: { type: String },
    lang: { type: String },
    course: { type: String },
    visited: [String],
    points: {
      type: String,
    },
    knowledge: {
      type: String,
    },
    manager: {
      type: String,
      required: [true, "No manager"],
    },
    token: {
      type: String,
    },
    isBanned: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = model("users", users);

module.exports = Users;

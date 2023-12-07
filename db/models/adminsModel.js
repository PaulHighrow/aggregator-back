const { Schema, model } = require("mongoose");

const admins = new Schema(
  {
    login: {
      type: String,
      required: [true, "No token type"],
    },
    password: {
      type: String,
      required: [true, "No expiration number"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Admins = model("admins", admins);

module.exports = Admins;

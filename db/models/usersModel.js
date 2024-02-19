const { Schema, model } = require("mongoose");

const users = new Schema(
  {
    name: {
      type: String,
      required: [true, "No name"],
    },
    mail: {
      type: String,
      required: [true, "No mail"],
    },
    password: {
      type: String,
      required: [true, "No password"],
    },
    token: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = model("users", users);

module.exports = Users;

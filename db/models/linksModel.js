const { Schema, model } = require("mongoose");

const links = new Schema(
  {
    a0: {
      type: String,
    },
    a1: {
      type: String,
    },
    a2: {
      type: String,
    },
    deutsch: {
      type: String,
    },
    polski: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Links = model("links", links);

module.exports = Links;

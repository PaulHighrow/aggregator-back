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
    b1: {
      type: String,
    },
    b2: {
      type: String,
    },
    a1free: {
      type: String,
    },
    a2free: {
      type: String,
    },
    deutscha0: {
      type: String,
    },
    deutsch: {
      type: String,
    },
    deutscha2: {
      type: String,
    },
    deutschfree: {
      type: String,
    },
    deutscha2free: {
      type: String,
    },
    polskia0: {
      type: String,
    },
    polski: {
      type: String,
    },
    polskia2: {
      type: String,
    },
    polskifree: {
      type: String,
    },
    a0kids: { type: String },
    a1kids: { type: String },
    a2kids: { type: String },
    b1kids: { type: String },
    b2kids: { type: String },
    b1kidsbeginner: { type: String },
    a1kidsfree: { type: String },
    trials: { type: String },
    trials_de: { type: String },
    trials_pl: { type: String },
    trials_kids: { type: String },
    test: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Links = model("links", links);

module.exports = Links;

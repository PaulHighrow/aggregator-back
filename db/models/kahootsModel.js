const { Schema, model } = require("mongoose");

const kahoots = new Schema(
  {
    a0: { links: [String] },
    a1: { links: [String] },
    a2: { links: [String] },
    b1: { links: [String] },
    deutsch: { links: [String] },
    polski: { links: [String] },
    a1kids: { links: [String] },
    a2kids: { links: [String] },
    b1kids: { links: [String] },
    trials: { links: [String] },
    trials_de: { links: [String] },
    trials_pl: { links: [String] },
    trials_kids: { links: [String] },
    test: { links: [String] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Kahoots = model("kahoots", kahoots);

module.exports = Kahoots;

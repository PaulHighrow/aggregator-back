const { Schema, model } = require("mongoose");

const hostKahoots = new Schema(
  {
    a0: {
      links: {
        a0_1: String,
        a0_2: String,
        a0_3: String,
        a0_4: String,
        a0_5: String,
      },
    },
    a1: {
      links: {
        a1_1: String,
        a1_2: String,
        a1_3: String,
        a1_4: String,
        a1_5: String,
      },
    },
    a2: {
      links: {
        a2_1: String,
        a2_2: String,
        a2_3: String,
        a2_4: String,
        a2_5: String,
      },
    },
    b1: {
      links: {
        b1_1: String,
        b1_2: String,
        b1_3: String,
        b1_4: String,
        b1_5: String,
      },
    },
    b2: {
      links: {
        b2_1: String,
        b2_2: String,
        b2_3: String,
        b2_4: String,
        b2_5: String,
      },
    },
    deutsch: {
      links: {
        deutsch_1: String,
        deutsch_2: String,
        deutsch_3: String,
        deutsch_4: String,
        deutsch_5: String,
      },
    },
    deutscha2: {
      links: {
        deutscha2_1: String,
        deutscha2_2: String,
        deutscha2_3: String,
        deutscha2_4: String,
        deutscha2_5: String,
      },
    },
    polski: {
      links: {
        polski_1: String,
        polski_2: String,
        polski_3: String,
        polski_4: String,
        polski_5: String,
      },
    },
    polskia2: {
      links: {
        polskia2_1: String,
        polskia2_2: String,
        polskia2_3: String,
        polskia2_4: String,
        polskia2_5: String,
      },
    },
    a1kids: {
      links: {
        a1kids_1: String,
        a1kids_2: String,
        a1kids_3: String,
        a1kids_4: String,
        a1kids_5: String,
        a1kids_6: String,
        a1kids_7: String,
        a1kids_8: String,
        a1kids_9: String,
        a1kids_10: String,
      },
    },
    a2kids: {
      links: {
        a2kids_1: String,
        a2kids_2: String,
        a2kids_3: String,
        a2kids_4: String,
        a2kids_5: String,
        a2kids_6: String,
        a2kids_7: String,
        a2kids_8: String,
        a2kids_9: String,
        a2kids_10: String,
      },
    },
    b1kids: {
      links: {
        b1kids_1: String,
        b1kids_2: String,
        b1kids_3: String,
        b1kids_4: String,
        b1kids_5: String,
        b1kids_6: String,
        b1kids_7: String,
        b1kids_8: String,
        b1kids_9: String,
        b1kids_10: String,
      },
    },
    b2kids: {
      links: {
        b2kids_1: String,
        b2kids_2: String,
        b2kids_3: String,
        b2kids_4: String,
        b2kids_5: String,
        b2kids_6: String,
        b2kids_7: String,
        b2kids_8: String,
        b2kids_9: String,
        b2kids_10: String,
      },
    },
    b1kidsbeginner: {
      links: {
        b1kidsbeginner_1: String,
        b1kidsbeginner_2: String,
        b1kidsbeginner_3: String,
        b1kidsbeginner_4: String,
        b1kidsbeginner_5: String,
        b1kidsbeginner_6: String,
        b1kidsbeginner_7: String,
        b1kidsbeginner_8: String,
        b1kidsbeginner_9: String,
        b1kidsbeginner_10: String,
      },
    },
    trials: {
      links: {
        trials_1: String,
        trials_2: String,
        trials_3: String,
        trials_4: String,
        trials_5: String,
      },
    },
    trials_de: {
      links: {
        trials_de_1: String,
        trials_de_2: String,
        trials_de_3: String,
        trials_de_4: String,
        trials_de_5: String,
      },
    },
    trials_pl: {
      links: {
        trials_pl_1: String,
        trials_pl_2: String,
        trials_pl_3: String,
        trials_pl_4: String,
        trials_pl_5: String,
      },
    },
    trials_kids: {
      links: {
        trials_kids_1: String,
        trials_kids_2: String,
        trials_kids_3: String,
        trials_kids_4: String,
        trials_kids_5: String,
      },
    },
    test: {
      links: {
        test_1: String,
        test_2: String,
        test_3: String,
        test_4: String,
        test_5: String,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const HostKahoots = model("host-kahoots", hostKahoots);

module.exports = HostKahoots;

const Kahoots = require("../db/models/kahootsModel");
const { patchKahoots } = require("../services/kahootsServices");

const updateKahoots = async (req, res) => {
  const kahoots = await Kahoots.findOne({});
  console.log(kahoots);
  const body = {};
  for (const [key, value] of Object.entries(req.body)) {
    console.log(value.replace);
    console.log(key);
    console.log(value);
    if (!value.replace) {
      console.log(body);
    }
    if (value) {
      body[key] = value;
    }
  }
  console.log(body);
  res.status(201).json(await patchKahoots(kahoots.id, body));
};
module.exports = updateKahoots;

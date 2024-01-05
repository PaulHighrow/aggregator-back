const Kahoots = require("../db/models/kahootsModel");
const { patchKahoots } = require("../services/kahootsServices");

const updateKahoots = async (req, res) => {
  const kahoots = await Kahoots.findOne({});
  const body = {};
  for (const [key, value] of Object.entries(req.body)) {
    if (!value.replace) {
      body[key] = { ...kahoots[key] };
      body[key].links = { ...body[key].links, ...value.links };
    }
    if (value && value.replace) {
      body[key] = value;
    }
  }
  res.status(201).json(await patchKahoots(kahoots.id, body));
};
module.exports = updateKahoots;

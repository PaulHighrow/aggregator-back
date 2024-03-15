const { getAllKahoots } = require("../../services/kahootsServices");

const getHostKahoots = async (_, res) => {
  return res.json(await getAllKahoots());
};

module.exports = getHostKahoots;

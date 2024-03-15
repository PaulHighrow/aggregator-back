const { getFirstKahoot } = require("../../services/kahootsServices");

const getOneHostKahoot = async (_, res) => {
  return res.json(await getFirstKahoot());
};

module.exports = getOneHostKahoot;

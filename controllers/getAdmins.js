const { getAllAdmins } = require("../services/adminsServices");

const getAdmins = async (_, res) => {
  return res.json(await getAllAdmins());
};

module.exports = getAdmins;

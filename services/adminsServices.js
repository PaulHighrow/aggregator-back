const Admins = require("../db/models/adminsModel");

const getAllAdmins = async () => await Admins.find({});

const newAdmin = async (body) => await Admins(body).save();

module.exports = {
  getAllAdmins,
  newAdmin,
};

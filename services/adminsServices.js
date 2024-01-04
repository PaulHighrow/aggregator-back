const Admins = require("../db/models/adminsModel");

const findAdmin = async () => await Admins.findOne({ login: "LinkAdmin" });

const findKahootAdmin = async () =>
  await Admins.findOne({ login: "KahootAdmin" });

const newAdmin = async (body) => await Admins(body).save();

const signInAdmin = async (id, body) =>
  await Admins.findByIdAndUpdate(id, body, { new: true });

const signInKahootAdmin = async (id, body) =>
  await Admins.findByIdAndUpdate(id, body, { new: true });

module.exports = {
  findAdmin,
  findKahootAdmin,
  newAdmin,
  signInAdmin,
  signInKahootAdmin,
};

const Users = require("../db/models/usersModel");

const findUser = async (query) => await Users.findOne(query);

const newUser = async (body) => await Users(body).save();

const deleteUser = async (id) => await Users.findByIdAndDelete(id);

const signInUser = async (id, body) =>
  await Users.findByIdAndUpdate(id, body, { new: true });

module.exports = {
  findUser,
  newUser,
  deleteUser,
  signInUser,
};

const Users = require("../db/models/usersModel");

const allUsers = async () => await Users.find({});

const findUser = async (query) => await Users.findOne(query);

const newUser = async (body) => await Users(body).save();

const deleteUser = async (id) => await Users.findByIdAndDelete(id);

const signInUser = async (id, body) =>
  await Users.findByIdAndUpdate(id, body, { new: true });

const updateUser = async (id, body) =>
  await Users.findByIdAndUpdate(id, body, { new: true });

module.exports = {
  allUsers,
  findUser,
  newUser,
  deleteUser,
  signInUser,
  updateUser,
};

const { deleteUser } = require("../../services/usersServices");

const removeUser = async (req, res) => {
  res.status(204).json(await deleteUser(req.params.id));
};

module.exports = removeUser;

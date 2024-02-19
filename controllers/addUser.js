const bcrypt = require("bcrypt");
const { newUser } = require("../services/usersServices");

const addUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  req.body.password = hashedPassword;

  res.status(201).json(await newUser({ ...req.body }));
};

module.exports = addUser;

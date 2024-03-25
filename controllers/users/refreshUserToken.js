const jwt = require("jsonwebtoken");
const { signInUser, findUser } = require("../../services/usersServices");

const refreshUserToken = async (req, res, next) => {
  const { mail } = req.body;
  console.log(req.body);
  const user = await findUser({ mail });
  console.log(user);
  if (!user) {
    next();
  }
  console.log(user.updatedAt.toDateString());
  const isTokenOK = jwt.verify(user.token, process.env.SECRET);
  if (!isTokenOK) {
    next();
  }

  const payload = { id: user._id };
  const newToken = jwt.sign(payload, process.env.SECRET, { expiresIn: "12h" });
  const name = user.name;

  try {
    await signInUser(user._id, { token: newToken });
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ newToken, user: { mail, name } });
};

module.exports = refreshUserToken;

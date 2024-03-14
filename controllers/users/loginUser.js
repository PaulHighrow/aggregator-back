const jwt = require("jsonwebtoken");
const { signInUser, findUser } = require("../../services/usersServices");

const loginUser = async (req, res, next) => {
  const { mail, password } = req.body;
  const user = await findUser({ mail });
  console.log(user);
  if (!user) {
    res.status(401).json("Login or password is wrong");
  }

  const validatedPassword = password === user.password;
  if (!validatedPassword) {
    res.status(401).json("Login or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "12h" });
  const visitDate = `${new Date().toLocaleDateString("uk-UA")}`;

  user.visited.includes(visitDate)
    ? user.visited
    : user.visited.length === 31
    ? user.visited.shift() && user.visited.push(visitDate)
    : user.visited.push(visitDate);

  const visited = user.visited;
  console.log(visited);

  await signInUser(user._id, { token, visited });

  res.status(200).json({ token, user: { mail, visited } });
};

module.exports = loginUser;

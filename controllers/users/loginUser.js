const jwt = require("jsonwebtoken");
const { signInUser, findUser } = require("../../services/usersServices");

const loginUser = async (req, res, next) => {
  const { mail, password } = req.body;
  console.log(req.body);
  const user = await findUser({ mail });
  console.log(user);
  if (!user) {
    console.log("!no such user");
    res.status(401).json("Login or password is wrong");
  }

  const validatedPassword = password === user.password;
  if (!validatedPassword) {
    console.log("!passwords don't match");
    res.status(401).json("Login or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "12h" });
  const visitDate = `${new Date().toLocaleDateString("uk-UA")}`;

  user.visited.includes(visitDate)
    ? user.visited
    : user.visited.length === 365
    ? user.visited.shift() && user.visited.push(visitDate)
    : user.visited.push(visitDate);

  const visited = user.visited;
  const name = user.name;
  const course = user.course;
  const lang = user.lang;
  const points = user.points;
  const pupilId = user.pupilId;
  const knowledge = user.knowledge;

  try {
    await signInUser(user._id, { token, visited });
  } catch (error) {
    console.log(error);
  }

  res
    .status(200)
    .json({ token, user: { mail, name, visited, lang, course, points, pupilId, knowledge } });
};

module.exports = loginUser;

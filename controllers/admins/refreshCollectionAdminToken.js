const jwt = require("jsonwebtoken");
const { signInCollectionsAdmin, findCollectionsAdmin } = require("../../services/adminsServices");

const refreshCollectionAdminToken = async (_, res, next) => {

  const admin = await findCollectionsAdmin();
  console.log(admin);
  if (!admin) {
    next();
  }
  console.log(
    admin.updatedAt.toDateString()
  );
  const isTokenOK = jwt.verify(admin.token, process.env.SECRET);
  if (!isTokenOK) {
    next();
  }
  const payload = { id: admin._id };
  const newToken = jwt.sign(payload, process.env.SECRET, { expiresIn: "12h" });

  await signInCollectionsAdmin(admin._id, { token: newToken });

  res.status(200).json({ newToken, admin: 'UserAdmin' });
};

module.exports = refreshCollectionAdminToken;

const express = require("express");

const { validateAdminUser } = require("../schema/adminsSchema");

const auth = require("../middlewares/streams/auth");
const authKahoot = require("../middlewares/streams/authKahoot");
const authUserAdmin = require("../middlewares/streams/authUserAdmin");

const addAdmin = require("../controllers/admins/addAdmin");
const getLinkAdmin = require("../controllers/admins/getLinkAdmin");
const loginAdmin = require("../controllers/admins/loginAdmin");
const getKahootAdmin = require("../controllers/admins/getKahootAdmin");
const loginKahootAdmin = require("../controllers/admins/loginKahootAdmin");
const getUserAdmin = require("../controllers/admins/getUserAdmin");
const loginUserAdmin = require("../controllers/admins/loginUserAdmin");
const refreshUserAdminToken = require("../controllers/admins/refreshUserAdminToken");

const router = express.Router();

router.get("/", auth, getLinkAdmin);

router.get("/kahoot", authKahoot, getKahootAdmin);

router.get("/users", authUserAdmin, getUserAdmin);

router.post("/new", validateAdminUser, addAdmin);

router.post("/login", validateAdminUser, loginAdmin);

router.post("/login/kahoot", validateAdminUser, loginKahootAdmin);

router.post("/login/users", validateAdminUser, loginUserAdmin);

router.post("/refresh/users", refreshUserAdminToken);

module.exports = router;

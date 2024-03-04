const express = require("express");

const { validateAdminUser } = require("../schema/adminsSchema");
const addAdmin = require("../controllers/addAdmin");
const getLinkAdmin = require("../controllers/getLinkAdmin");
const auth = require("../middlewares/streams/auth");
const loginAdmin = require("../controllers/loginAdmin");
const authKahoot = require("../middlewares/streams/authKahoot");
const getKahootAdmin = require("../controllers/getKahootAdmin");
const loginKahootAdmin = require("../controllers/loginKahootAdmin");
const getUserAdmin = require("../controllers/getUserAdmin");
const authUserAdmin = require("../middlewares/streams/authUserAdmin");
const loginUserAdmin = require("../controllers/loginUserAdmin");
const refreshUserAdminToken = require("../controllers/refreshUserAdminToken");

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

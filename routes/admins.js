const express = require("express");

const { validateAdminUser } = require("../schema/adminsSchema");
const addAdmin = require("../controllers/addAdmin");
const getLinkAdmin = require("../controllers/getLinkAdmin");
const auth = require("../middlewares/streams/auth");
const loginAdmin = require("../controllers/loginAdmin");
const authKahoot = require("../middlewares/streams/authKahoot");
const getKahootAdmin = require("../controllers/getKahootAdmin");
const loginKahootAdmin = require("../controllers/loginKahootAdmin");

const router = express.Router();

router.get("/", auth, getLinkAdmin);

router.get("/kahoot", authKahoot, getKahootAdmin);

router.post("/new", validateAdminUser, addAdmin);

router.post("/login", validateAdminUser, loginAdmin);

router.post("/login/kahoot", validateAdminUser, loginKahootAdmin);

module.exports = router;

const express = require("express");

const authUser = require("../middlewares/streams/authUser");
const addUser = require("../controllers/addUser");
const getUser = require("../controllers/getUser");
const loginUser = require("../controllers/loginUser");
const refreshUserToken = require("../controllers/refreshUserToken");

const { validateUser } = require("../schema/usersSchema");

const router = express.Router();

router.get("/", authUser, getUser);

router.post("/new", validateUser, addUser);

router.post("/login", validateUser, loginUser);

router.post("/refresh", refreshUserToken);

module.exports = router;

const express = require("express");

const authUser = require("../middlewares/streams/authUser");
const addUser = require("../controllers/addUser");
const getUser = require("../controllers/getUser");
const loginUser = require("../controllers/loginUser");
const refreshUserToken = require("../controllers/refreshUserToken");
const removeUser = require("../controllers/removeUser");

const { validateUser } = require("../schema/usersSchema");

const router = express.Router();

router.get("/", authUser, getUser);

router.post("/new", validateUser, addUser);

router.delete("/delete/:id", removeUser);

router.post("/login", validateUser, loginUser);

router.post("/refresh", refreshUserToken);

module.exports = router;

const express = require("express");

const authUser = require("../middlewares/streams/authUser");
const addUser = require("../controllers/addUser");
const getUser = require("../controllers/getUser");
const getAllUsers = require("../controllers/getAllUsers");
const loginUser = require("../controllers/loginUser");
const refreshUserToken = require("../controllers/refreshUserToken");
const removeUser = require("../controllers/removeUser");
const banUser = require("../controllers/banUser");

const { validateUser } = require("../schema/usersSchema");
const checkIsAdmin = require("../middlewares/streams/checkIsAdmin");

const router = express.Router();

router.get("/", authUser, getUser);

router.get("/admin", checkIsAdmin, getAllUsers);

router.post("/new", validateUser, addUser);

router.delete("/:id", removeUser);

router.post("/login", validateUser, loginUser);

router.post("/refresh", refreshUserToken);

router.patch("/:id", banUser);

module.exports = router;

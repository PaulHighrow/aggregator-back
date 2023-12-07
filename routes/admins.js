const express = require("express");

const { validateAdminUser } = require("../schema/adminsSchema");
const addAdmin = require("../controllers/addAdmin");
const getAdmins = require("../controllers/getAdmins");

const router = express.Router();

router.get("/", getAdmins);

router.post("/", validateAdminUser, addAdmin );

module.exports = router;

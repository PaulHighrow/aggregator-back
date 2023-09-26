const express = require("express");
const addToken = require("../controllers/addToken");

const router = express.Router();

router.post("/", addToken)

module.exports = router;

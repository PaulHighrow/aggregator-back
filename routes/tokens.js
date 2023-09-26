const express = require("express");
const addToken = require("../controllers/addToken");

const crmAuth = require("../middlewares/crm/crmAuth");

const router = express.Router();

router.post("/", crmAuth, addToken);

module.exports = router;

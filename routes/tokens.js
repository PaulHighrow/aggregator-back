const express = require("express");

const crmAuth = require("../middlewares/crm/crmAuth");

const router = express.Router();

router.post("/", crmAuth);

module.exports = router;

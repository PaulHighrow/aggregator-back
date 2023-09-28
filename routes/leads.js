const express = require("express");

const getLeads = require("../controllers/getLeads");

const crmRefresh = require("../middlewares/crm/crmRefresh");
const postLead = require("../middlewares/crm/postLead");

const { validateLead } = require("../schema/leadSchema");

const router = express.Router();

router.get("/", getLeads);

router.post("/", validateLead, postLead, crmRefresh);

module.exports = router;

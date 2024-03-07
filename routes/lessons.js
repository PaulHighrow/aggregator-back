const express = require("express");

const { validateLesson } = require("../schema/lessonsSchema");

const getLeads = require("../controllers/leads/getLeads");
const addLesson = require("../controllers/lessons/addLesson");


const router = express.Router();

router.get("/", getLeads);

router.post("/", validateLesson, addLesson);

module.exports = router;

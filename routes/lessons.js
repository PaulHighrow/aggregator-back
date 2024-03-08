const express = require("express");

const { validateLesson } = require("../schema/lessonsSchema");

const getLessons = require("../controllers/lessons/getLessons");
const addLesson = require("../controllers/lessons/addLesson");

const router = express.Router();

router.get("/", getLessons);

router.post("/", validateLesson, addLesson);

module.exports = router;

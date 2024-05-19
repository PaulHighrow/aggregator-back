const express = require("express");

const { validateLesson } = require("../schema/lessonsSchema");

const getLessons = require("../controllers/lessons/getLessons");
const addLesson = require("../controllers/lessons/addLesson");
const editLesson = require("../controllers/lessons/editLesson");

const router = express.Router();

router.get("/", getLessons);

router.post("/", validateLesson, addLesson);

router.put("/:id", validateLesson, editLesson);

module.exports = router;

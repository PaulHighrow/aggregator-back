const Lessons = require("../db/models/lessonsModel");

const getAllLessons = async () => await Lessons.find({});

const newLesson = async (body) => await Lessons(body).save();

module.exports = {
  getAllLessons,
  newLesson,
};

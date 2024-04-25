const Ratings = require("../db/models/ratingsModel");

const getAllRatings = async () => await Ratings.find({});

const getLastRating = async () => await Ratings.findOne({});

const newRatings = async (body) => await Ratings(body).save();

module.exports = {
  getAllRatings,
  getLastRating,
  newRatings,
};

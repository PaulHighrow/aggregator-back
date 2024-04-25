const express = require("express");

const getRatings = require("../controllers/ratings/getRatings");
const addRatings = require("../controllers/ratings/addRatings");

const router = express.Router();

router.get("/", getRatings);

router.post("/", addRatings);

module.exports = router;

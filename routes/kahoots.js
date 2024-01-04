const express = require("express");

const auth = require("../middlewares/streams/auth");
const { validateKahoots } = require("../schema/kahootsSchema");
const updateKahoots = require("../controllers/updateKahoots");
const addKahoots = require("../controllers/addKahoots");
const getOneKahoot = require("../controllers/getOneKahoot");
const getKahoots = require("../controllers/getKahoots");

const router = express.Router();

router.get("/all", getKahoots);

router.get("/", getOneKahoot);

router.post("/", auth, validateKahoots, addKahoots);

router.patch("/", auth, validateKahoots, updateKahoots);

module.exports = router;

const Links = require("../db/models/linksModel");

const getAllLinks = async () => await Links.find({});

const newLinks = async (body) => await Links(body).save();

const updateLinks = async (body) => await Links(body).save();

module.exports = {
  getAllLinks,
  newLinks,
  updateLinks
};

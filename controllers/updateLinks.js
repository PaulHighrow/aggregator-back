const Links = require("../db/models/linksModel");
const { patchLinks } = require("../services/linksServices");

const updateLinks = async (req, res) => {
  const id = await Links.findOne({});
  console.log(id);
  res.status(201).json(await patchLinks(id, req.body));
};
module.exports = updateLinks;

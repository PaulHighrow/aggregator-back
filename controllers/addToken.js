const { savePrimaryToken } = require("../services/tokensServices");

const addToken = async (req, res) =>
  res.status(201).json(await savePrimaryToken(req.body));

module.exports = addToken;

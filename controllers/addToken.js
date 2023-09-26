const { savePrimaryToken } = require("../services/tokensServices");

const addToken = async (req, res) => {
  console.log(res);

  res.status(201).json(await savePrimaryToken(res.token));
};

module.exports = addToken;

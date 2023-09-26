const axios = require("axios");
const { getToken } = require("../../services/tokensServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const crmRefresh = async (_, __, next) => {
  try {
    const currentToken = getToken();
    console.log(currentToken);
    if (currentToken) {
      const refreshResp = await axios.post(
        "oauth2/access_token", currentToken
      );
      console.log(refreshResp);
      console.log(refreshResp.data);
    }

    next();
  } catch (error) {
    console.log(error.response.data);
  }
  next();
};

module.exports = crmRefresh;

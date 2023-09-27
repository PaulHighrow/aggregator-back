const axios = require("axios");
const { getToken, refreshToken } = require("../../services/tokensServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const crmRefresh = async (_, __, next) => {
  try {
    const currentToken = await getToken();

    if (currentToken[0]) {
      const refreshRequestBody = {
        client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
        client_secret:
          "htCdCADEqXeDIgH9V43UiZ8WI1IrzI0ftZu6xruKMaOM9LqBqlqkT6jwwkNSep7f",
        grant_type: "refresh_token",
        refresh_token: currentToken[0].refresh_token,
        redirect_uri: "https://paulhighrow.github.io/aggregator/",
      };

      const refreshResp = await axios.post(
        "oauth2/access_token",
        refreshRequestBody
      );

      const newToken = await refreshToken(currentToken[0]._id, refreshResp);
      console.log(newToken);
    }
    next();
  } catch (error) {
    console.log(error.response);
  }
  next();
};

module.exports = crmRefresh;

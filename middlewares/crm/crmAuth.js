const axios = require("axios");
const { savePrimaryToken, getToken } = require("../../services/tokensServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
  client_secret:
    "DRjiAn1CevBuuGba8yETZHz1Ui9jydTuLPsbADGhA2OKxQUdULlqhnlVkAR6av4A",
  grant_type: "authorization_code",
  code: "def5020016f5b379983d0b52535975c2a364504c6491091522a74cca903fbca123fabdc56c23933c6ec0bc197c4503d8bf9ceedbdcdcccff1d89b5e842804c3a71753361fd20489417009a401df1e2aabab9990be7ced74321db7258961bb0e4952c825a51a626c4efd2b9ac51116bd4d12f207d1196ac495a2b5ed65c54b96e0b11d74576fa2d95a71db2aa227be78a4f6f9a140dc0e858115836b766e6b9bf02f59e7c48ce8eb3eb99f5eb64f9372d5fc3939ba4ac163dd2f182bf745a6b65eba033b132388f34b2e0e3eecf6e5c8b800f5d0801b01d5fae1a88930955bec074895774b373345653cf5251da5fb843046754e7c66c5598e009c3dfc4e53eb8dab9c5cec225881fb582a1a1dfd15585c5cae1b44e9523344eb356a891b2a60d9c02d09f70f99093b5c746f26dced6bbff474b8f3765b0aae657247b85d66959bffaf11891ae45572dbe33fd4fee19ca62da0c4ab27ad461c47a17bbc3ca2b9289d941dbfe0af7a7b01eaf38c368a6ca6e642da0375f3b7131962de694501ad35d173d476ccaec633480e71bf74fc3d443e91d4bec2248281b1a97c783db6806efa22c22617613253a1389bbfa090576a0dce5f90492330f3d59030364eb2e0930c48167e04591308bdb1e86c2e38957be7e171992f117745251a9a4ea05a0416d8472e5c9b0df003bace7434a8c4a6024dde93937d0fc2e343827",
  redirect_uri: "https://paulhighrow.github.io/aggregator/",
};

const crmAuth = async (_, res, next) => {
  try {
    const currentToken = await getToken();
    console.log(currentToken, "auth CurrentToken");
    if (!currentToken[0]) {
      const authResp = await axios.post("oauth2/access_token", authRequest);
      await savePrimaryToken(authResp.data);
      return res.status(authResp.status).json(authResp.data);
    }
    next();
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
  next();
};
module.exports = crmAuth;

const axios = require("axios");
const fs = require('fs').promises;
const path = require("path");
const tokenPath = path.join(__dirname, "../../utils/crm/tokens.json")

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
  client_secret:
    "kDXg631huFtqIrkFLQe1KIMKYWNl2V6iHhUiJuhG2s5lQX4NNTPlM18UOsWVvsUW",
  grant_type: "authorization_code",
  code: "def50200667a7c422e9cee02e56d7ee3a7c7301e49e725675876f136d969431203c0ead527ea062f5fc6482dd3abee547a70609fd125f3d9407fc44b13f20e140fbcbee91ce7f48f65f44079d247522bb9c2999f010ce206c4f8ab8a712a2ed325d28dcf0021535f4404c252ff24bcf5fc2069a1c71878a21fea592bcda72027a06d1894babeeffeb276b3c0b4137c5ace2cfbd4aa5493fdb880bec132af1ca07f694494efa16a91193bb70d1f77c601f406e450b166d167a26641c01fb5487d1aecb5b83c83d755e376feedb103e8b2cdfef15fd486f64c0fc918ade24fcf7563f5596980356d3ee7301eb811821d36e12ed2cf046fde5846aa2a3bc3fcb2d0c0baee9e1cb22259d688ae6decf82029a8444ca582db211682a4986533434da799aa44f5072f3fa6b592254089a4bee9480f878d6196f115d26a399f57c236a221450ede0f8ca871c5d366b59a60216925882770d015fdd5df3e952979bc4a01939fa42e250b6cf1ad3cc5721ac360923a10e509b2c8a8ce44bcd25a8b801aa1e227000999bb80fd26fb996434d935944bd6304c8ff596277f7f773dce69c8ef3d9730a00e5febf4b2117b8c24ee4b9ae72d9a347a2561094ff8741ca905c61fc1b2f1b3bdd5f8ff8cafe37e2e08106d7b12cd0388723554646c11854f3675b62be94f7f82f3a64011b68cff431e518e35fa3be5768b60a9662ea1",
  redirect_uri: "https://paulhighrow.github.io/aggregator/",
};

const crmAuth = async (_, __, next) => {
  try {
    const authResp = await axios.post("oauth2/access_token", authRequest);
    console.log(authResp.data);
    await fs.writeFile(tokenPath, JSON.stringify(authResp.data), "utf-8")
    next();
  } catch (error) {
    console.log(error.response.data);
  }
  next();
};

module.exports = crmAuth;

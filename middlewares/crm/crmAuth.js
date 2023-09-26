const axios = require("axios");
const fs = require('fs').promises;
const path = require("path");
const tokenPath = path.join(__dirname, "../../utils/crm/tokens.json")

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
  client_secret:
    "ymprn9kVrWstGHoo2han8G3iHtYNLguBDkfzaCcUcbr25XiDybQDrGYsea8tnuFn",
  grant_type: "authorization_code",
  code: "def5020002b20a1263e1ffbd40c176aae39fa6e9ab558908f81938a17bd073f753627771fbb086d6667b59c940dc062d7da2581b3427134dec3c05e8592ace6248e7c70b565522854b1c40e8709c2120ddd523fa29d57712d5de1c5d7d3321d4deafbb3f936e286a3e6e867d7ac423c4d5049d18427bce4daebb66bf72898b52d314e9e8c21d21d3c0154094af56c558dfb8314f2ab7c8cc0f908c740a53c477e60cde35044a7332b62be3b99518e2ca081fe50db2490a86b5b9ee69d951c5a5cd7b8a11770b4ab8a241ebace582d252cc5150a909951fb7c43466158d011fa79df3a6087d144ec644a3c8655ac07462aa5f5d7c9b3a5b281e431e576727b15bd6dee6c241a888b56edf2ebfc817c35406920e1478c7fb306bd4c3a39053e15fd39e61ee5571938a7f026200ad7905c3e786ce8f85a8077b03a86c923121d3dc38c1dc090f44e84046f4f9f448aa26c48380a87903e6bcf55ea666c1b3aa5aa5d6bff6ab507aa89c12205e2ee43046f829535244512fe137ae338320fa49c63af70138f9b8d0425f0576d398d41d7e9605628a66caf6d7e1a3c37308b2ffa4d6c298193c347d7ff15e99a82f92daf7244be497ce7c3ad39cf04b58598fed30234afbd47bd42a3e96e8413a6da85e4d3f371d6dd3eea0db0db2bde69d4b2bdc2825c44db098e180493fa4c9c42e1d1474c92d237cb7b171b12dc94f",
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

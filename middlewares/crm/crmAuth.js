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
  code: "def50200d833cdefe16152a07dce23415397212737f8497ccc63027145c965f86504098f11e475180a9f589debc5d40819557bb0aef58df772ad91dbb31e6c96f4b20fc6542ae386b1ef3abea4676245a742fa514942626f29bfb56a5595683be8be68be2a9c7f5b11be82d59996a07221882773dc5186014b9055b23408e4688b2d58f53df9d88d58f2c985ad0f45529cdd665de0776f3aec258e3bd56f39e61602b49577cc5e4f48290b7990c3b565a7fe21d434bbc61616eae00880e49fd28448443e745dcd2b35e8779f5c8abc1fd25a1ee36cae80515c7fa36e1ef532293a36f8a908fe5cca23591d4a2d7bde80d85a44c5fd4ccc36fa2f4434779de826198871cce101f2d87797a2aa308bc609a6f93a6602c20f963f546242c23a30040ed0d5cb7e3d7783ebfa191e0b20d3e38f8d73cd119172acb8e66d3aa3377043b70627e3136c38243232b484a42127288f1a29fa7dc72222dd3339f1960d03cc3691c5df28e05c3d166103fd19db6741e94c374065f65da4d44f9c827b52b887205b80cbe87d4d8f79ff4a6c8a589b10e868f78fd7430bfc45db0da1d3b1f3c52b0977fb2dd590a477abc4226ebb5a6fc6ec7a68c5e43f557d628208a3af71eeb9c3408f4f221061c707d4a8beadb80373564d5325d2401140d037259cb4c48df347655ea95b3ace3abf96ddb7932f6ff5346eb452342df878539b",
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

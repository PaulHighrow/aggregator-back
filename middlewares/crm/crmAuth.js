const axios = require("axios");
const { savePrimaryToken } = require("../../services/tokensServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
  client_secret:
    "htCdCADEqXeDIgH9V43UiZ8WI1IrzI0ftZu6xruKMaOM9LqBqlqkT6jwwkNSep7f",
  grant_type: "authorization_code",
  code: "def50200ac6bc0fbb6ba06f7f08a9d69e18af419f3431bb783e5a8c16d292014763d25bb69f62fb5770571ecd8ccd97bf6238be122eac33676726d202e6448b7eaf183877722c04d22df39eaa1af703f41e88be06d937da525d5f36775c399226cbb7e4b7f07680b4c582cd9cea23d9c5b538addd94364f742ed15019f0ef6be4c2891ec534ca43026b424d90bc53f71b4407b7abeb7f4e7897549c43c179c083ddc4d4fd8460c1025c602cd749116d431d0ae64b4a618957ea105c9696457aeb6442383e8d647da9e45950e9e47e66e73b66682195428e359154953738fa11416408ebe8fec1f84091c7e4a6b7096286c164b32f701f5dc60e9b5df92c071cb2adc8a090b9c9d3f8d24b801a2ae608557f9285aaa94e37255ee4652719b7653868ab43db6d96a9cf614f6be71269699c75b7ea5b7b4497d4656a08716fec81a967057ad332901d651da364a27a5ef1e1418e3a58ddd9713f8f55142f32e3901de352d8a65147212d8a1ed79f877d20d26f82724189804ece93cee8a0412c7e445edea88517c6f4089e1c44977084d01188e82f5d81e9ea0cc74fb2b893336b93a30e57a2c8c9dd1bef713212ae10fe585261544e9111f9e2f97238df365412e3823c2073e009418558c44435159df262b9d2551b2c63faba64f291124c76c10f9c353b9520e8d1e1b197c825c986403e34bc1715d66a7a49a657c",
  redirect_uri: "https://paulhighrow.github.io/aggregator/",
};

const crmAuth = async (_, __, next) => {
  try {
    const currentToken = getToken();
    if (!currentToken) {
      const authResp = await axios.post("oauth2/access_token", authRequest);
      await savePrimaryToken(authResp.data);
      next();
    }
    next();
  } catch (error) {
    console.log(error.response.data);
  }
  next();
};

module.exports = crmAuth;

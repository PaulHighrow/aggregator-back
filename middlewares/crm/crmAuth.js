const axios = require("axios");
const { savePrimaryToken } = require("../../services/tokensServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
  client_secret:
    "qvTEYoVllrva3jDyvbXSTjtNQA4ekqcQVWtrmFfyXUmjUhU2aTOl61TFKYHN6dMw",
  grant_type: "authorization_code",
  code: "def50200ecc816ee74fac8203024ceb863c56f9de92ae26e0d3a9ec1e2da422c7f908ca29639faee0f95ca2ccc3664bceb3bf82ebff689ca561c89dbad13c67eaa8c11e0e52c29e44854e8b7f4f77f00e1a66fd9e54151f293c8d2060553a02875820468fae3bedb8495ae55f4c0e89004485077491c518831d0dba1699bc7e8baa1c5215aad59f6204282bbe08ce8e3a800be8f7936b15ab82c541f0c4f36ce20e685c8df6e8eeecccba8c96c2aeb60473250afff6efeceb3bac5320c4a51ed7107a3873bd2bfe4b8d26fd71c6cab59db360a6018d631f78eb02afc4e665f0f00857dbce98aaeef5ce12787790b4fe10d44cab485f7a290e2f4e57bfc85f5057e5f9521509d06eedf12aaab4b95e14c5782fcb3ed1b26a77cb58d50834c3448937ef171ff19fced6a0c4dca44f1d17a4f58e5e26b0a07c26ff2f499b4447caceec785835a3e8a99cae9a6b13d24d3e905d1d66fdeaea83ab6593b5d46288abf704dd4a714e67dd5447e26edaec09276f74043284e18bd4dc347a7ffffca8bb87de0693f715d27260db6046eda9d0e84914e999a197b211680791c9466b7cb80e32f8ad4b47998cf74737a6099fc881d6e75456e30062c2ce36da06125abe91c4b1864c7864760a0d4ee2fc768c62410e4322b158b8d7d72fe29d82403cf76e1f3503c3188c10ad9cc463808983385ec6c318c436823abe2721c94",
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
    console.log(error.response);
  }
  next();
};

module.exports = crmAuth;

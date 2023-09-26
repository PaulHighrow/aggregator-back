const axios = require("axios");
const { savePrimaryToken } = require("../../services/tokensServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "f01d64db-d81d-4192-9c11-c9cca1708f41",
  client_secret:
    "ymprn9kVrWstGHoo2han8G3iHtYNLguBDkfzaCcUcbr25XiDybQDrGYsea8tnuFn",
  grant_type: "authorization_code",
  code: "def5020001d04734eab70d61b88e4e8b16373b37ac9b66350e4be966eade44b32742a1b5f65769f6ed39178e981e4c8fb4242b0b90a11fd2041114bb935433c6cf59e5e27d5a6be0d17395f00f85d98dd48fbde78c6924b62313b98b5a2480b584f4b14709373d233f9891769fc0fecddd84408fd044cfb635b0926c921ec78a67f4a16b13581f3d52c84ed86170092d28be1bd7f8448ecf56692841563e240e58846b88a3ac5df3fbf7bd99003d4d17d939109b8608c5af0914e9caa288e790f557fd246d3b4a461cf6718b6e21002100c6d33df881fde9057b62361f803c4d12595de1a82fdfdd344a57bcacf5a425e3a7aea7bbd15916007897ec71ffc9967e56049214beb30441a7de02a06caba89924041dca2e5ccae087c3b877bb85b8d0db9f3a11188e5bd255bccb18925aee2daffdca175b4d0144c7cb6bf661be5206f90e827a2ffef06ed92f084acdbc6a7a3b8640a6a37ebf39bfa379f1d9e167839798d529b735f087a0e57303201940453c429d07416ac36a97ce21f4d35fa653d5f953494fefb47b674d2d16dd1b49f2c095f2cd81c70ed27ea6c2ec08ecafd6d3ceb91541a7534db3e04c970ecc973232abc18e0e7f8025ed85cf44b27ee4df676f0da64bc88d9cf64a45e6ccbb8ba8f3b1a1f34bf6d10af8ebf7b473be249b43d35ef61fb5ec2a3e95b06e1fb03d23453916e8c338fb081908",
  redirect_uri: "https://paulhighrow.github.io/aggregator/",
};

const crmAuth = async (_, __, next) => {
  try {
    const currentToken = getToken();
    console.log(currentToken);
    if (!currentToken) {
      const authResp = await axios.post("oauth2/access_token", authRequest);
      console.log(authResp.data);
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

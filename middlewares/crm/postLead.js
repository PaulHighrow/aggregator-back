const axios = require("axios");
const { getToken } = require("../../services/tokensServices");
const { newLead } = require("../../services/leadsServices");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const postLead = async (req, res, next) => {
  const postRequest = [
    {
      name: `Website Lead ${req.body.name}`,
      pipeline_id: 6542135,
      _embedded: {
        tags: [{ name: "Лід з сайту" }],
        contacts: [
          {
            name: req.body.name,
            custom_fields_values: [
              {
                field_id: 556510,
                field_name: "Work phone",
                values: [
                  {
                    value: req.body.phone,
                    enum_code: "WORK",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];

  const lead = { name: req.body.name, phone: req.body.phone };

  try {
    const currentToken = await getToken();
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${currentToken[0].access_token}`;
    await axios.post("api/v4/leads/complex", postRequest);
    return res.status(201).json(await newLead(lead));
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = postLead;

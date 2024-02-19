const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  mail: Joi.string().required(),
  password: Joi.string().required(),
  token: Joi.string()
});

const validateUser = ({ body }, res, next) => {
  const { error } = userSchema.validate(body);

  if (error) return res.status(error.status).json(error.details[0].message);

  next();
};

module.exports = {
  validateUser,
};

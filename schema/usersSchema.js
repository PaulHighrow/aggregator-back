const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string(),
  mail: Joi.string().required(),
  password: Joi.string().required(),
  points: Joi.string().empty(""),
  token: Joi.string(),
  isBanned: Joi.bool(),
});

const validateUser = ({ body }, res, next) => {
  const { error } = userSchema.validate(body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = {
  validateUser,
};

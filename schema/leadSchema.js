const Joi = require("joi");

const leadSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(10).max(20).required(),
  utm_content: Joi.string(),
  utm_medium: Joi.string(),
  utm_campaign: Joi.string(),
  utm_source: Joi.string(),
  utm_term: Joi.string(),
  utm_referrer: Joi.string(),
});

const validateLead = ({ body }, res, next) => {
  const { error } = leadSchema.validate(body);
  if (error) return res.status(400).json(error.details[0].message, "here");

  next();
};

module.exports = {
  validateLead,
};

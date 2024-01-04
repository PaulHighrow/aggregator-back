const Joi = require("joi");

const kahootsSchema = Joi.object({
  a0: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool().required(),
  }),
  a1: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  a2: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  b1: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  deutsch: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  polski: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  a1kids: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  a2kids: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  b1kids: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  trials: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  trials_de: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  trials_pl: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  trials_kids: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
  test: Joi.object({
    links: Joi.array().items(Joi.string().empty("")).single().max(5),
    replace: Joi.bool(),
  }),
});

const validateKahoots = ({ body }, res, next) => {
  const { error } = kahootsSchema.validate(body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = {
  validateKahoots,
};

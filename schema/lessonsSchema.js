const Joi = require("joi");

const lessonsSchema = Joi.object({
  level: Joi.string().required(),
  lesson: Joi.string().required(),
  topic: Joi.string().required(),
  keysEn: Joi.string().required(),
  keysUa: Joi.string().required(),
  pdf: Joi.array().items(Joi.string()),
  video: Joi.array().items(Joi.string()),
});

const validateLesson = ({ body }, res, next) => {
  const { error } = lessonsSchema.validate(body);
  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = {
  validateLesson,
};

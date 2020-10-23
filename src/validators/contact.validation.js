import Joi from 'joi';

const contactFormValidation = Joi.object({
  name: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

export default contactFormValidation;

import Joi from 'joi';

const signupFormValidation = Joi.object({
  name: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{8,}$/
  ),
});

export default signupFormValidation;

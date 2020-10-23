import Joi from 'joi';

const loginFormValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{8,}$/
  ),
});

export default loginFormValidation;

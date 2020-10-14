import messages from '../utils/customMessage';
import helpers from '../utils/helpers';
import responses from '../utils/responses';
import statusCode from '../utils/statusCode';
import loginFormValidation from '../validators/login.validation';
import signupValidation from '../validators/signup.validation';

const { errorResponse } = responses;
const { unAuthorized } = statusCode;

const validateSignup = (req, res, next) => {
  const { name, password, email } = req.body;
  const validateInp = signupValidation.validate({
    name,
    password,
    email,
  });
  if (validateInp.error) {
    return errorResponse(
      res,
      unAuthorized,
      validateInp.error.details[0].message
    );
  }
  return next();
};
const validateLogin = (req, res, next) => {
  const { password, email } = req.body;
  const validateInp = loginFormValidation.validate({
    password,
    email,
  });
  if (validateInp.error) {
    return errorResponse(res, unAuthorized, validateInp.error);
  }
  return next();
};
export default {
  validateLogin,
  validateSignup,
};

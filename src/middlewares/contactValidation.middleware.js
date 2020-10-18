import responses from '../utils/responses';
import statusCode from '../utils/statusCode';
import contactValidation from '../validators/contact.validation';

const { errorResponse } = responses;
const { badRequest } = statusCode;

export const validateContact = (req, res, next) => {
  const { name, message, email } = req.body;
  const validateInp = contactValidation.validate({
    name,
    message,
    email,
  });
  if (validateInp.error) {
    return errorResponse(res, badRequest, validateInp.error.details[0].message);
  }
  return next();
};

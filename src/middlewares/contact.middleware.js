import responses from '../utils/responses';
import messages from '../utils/customMessage';
import statusCode from '../utils/statusCode';

const { errorResponse } = responses;
const { adminPrivilege } = messages;
const { forbidden } = statusCode;

export const checkIfHasAdminPrivilege = (req, res, next) => {
  if (req.User.role === 'admin') {
    return next();
  }
  return errorResponse(res, forbidden, adminPrivilege);
};

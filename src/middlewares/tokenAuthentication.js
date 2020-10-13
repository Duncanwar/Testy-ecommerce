import helper from '../utils/helpers.js';
import userService from '../services/user.service';

const { verifyToken } = helper;
const { getUserById } = userService;

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    req.User = '';
    return next();
  }
  const token = authorization.replace('Bearer ', '');
  const payload = verifyToken(token);
  const { _id } = payload;
  const role = await getUserById(_id);
  req.User = payload;
  req.User.role = role;
  return next();
};

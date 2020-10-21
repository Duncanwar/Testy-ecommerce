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
  const role = await (await getUserById(_id)).get('role');
  req.User = payload;
  req.User.role = role;
  return next();
};

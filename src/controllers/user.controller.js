import UserService from '../services/user.service';
import helpers from '../utils/helpers';
import responses from '../utils/responses';
import message from '../utils/customMessage';
import statusCode from '../utils/statusCode';

const { hashPassword, generateToken } = helpers;
const { ok, created } = statusCode;
const { userCreated, userLogin } = message;
const { createUser, getUserByEmail } = UserService;
const { successResponse, updateResponse } = responses;

/**
 * @description this controller deals with user services
 */
export default class UserController {
  static async signup(req, res) {
    const inputFormData = req.body;
    const textPassword = inputFormData.password;
    inputFormData.password = hashPassword(textPassword);
    const user = await createUser(inputFormData);
    const token = generateToken(user);
    return successResponse(res, created, token, userCreated);
  }

  static async login(req, res) {
    const inputFormData = req.body;
    const user = await getUserByEmail(inputFormData.email);
    const token = generateToken(user);
    return successResponse(res, ok, token, userLogin);
  }
}

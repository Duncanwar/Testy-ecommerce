import UserService from '../services/user.service';
import helpers from '../utils/helpers';
import responses from '../utils/responses';
import message from '../utils/customMessage';
import statusCode from '../utils/statusCode';

const { hashPassword, generateToken } = helpers;
const { ok, created } = statusCode;
const { userCreated, userLogin } = message;
const { createUser, getUserByEmail } = UserService;
const { successResponse } = responses;

/**
 * @description this controller deals with user services
 */
export default class UserController {
  /**
   * @description this controller saves/signup a user in database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object with token and signup message
   */
  static async signup(req, res) {
    const inputFormData = req.body;
    const textPassword = inputFormData.password;
    inputFormData.password = hashPassword(textPassword);
    const user = await createUser(inputFormData);
    const token = generateToken(user);
    return successResponse(res, created, token, userCreated, user);
  }
  /**
   * @description this controller logs in a user in the blog
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object with token and login message
   */
  static async login(req, res) {
    const inputFormData = req.body;
    let user = await getUserByEmail(inputFormData.email);
    const token = generateToken(user);
    return successResponse(res, ok, token, userLogin, user);
  }
}

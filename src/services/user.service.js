import User from '../database/models/user.model';
import 'regenerator-runtime/runtime';

/**
 * @description This service deals with the User model
 */

export default class UserServices {
  /**
   * @description this service create a new user in the db
   * @param {object} user
   * @returns {object} return the created user

   */
  static async createUser(user) {
    const newUser = User.create(user);
    return newUser;
  }
  /**
   * @description this service get a user in the db by email or Id
   * @param {String} id
   * @returns {object} returns one user searched by using Id
   */
  static async getUserById(id) {
    return await User.findById(id).select('-password');
  }
  /**
   * @description this service get a user in the db by email or Id
   * @param {String} data
   * @returns {object} returns one user searched by using email
   */
  static async getUserByEmail(email) {
    return await User.findOne({ email: email });
  }
}

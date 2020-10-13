import User from '../models/user.model';

/**
 * @description This service deals with the User model
 */

export default class UserServices {
  /**
   * @description this service create a new user in the db
   * @param {object} user
   */
  static async createUser(user) {
    const newUser = User.create(user);
    return newUser;
  }
  /**
   * @description this service get a user in the db by email or Id
   * @param {String} id
   */
  static async getUserByIdOrEmail(data) {
    let user;
    if (typeof data === 'string') {
      user = await User.findOne({ email: data });
      return user;
    }
    user = awaitUser.findOne({ _id: data });
    return user;
  }
}

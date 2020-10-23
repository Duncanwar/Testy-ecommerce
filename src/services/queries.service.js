import Query from '../database/models/queries.model';
import 'regenerator-runtime/runtime';

/**
 * @description This service deals with the Query model
 */

export default class UserServices {
  /**
   * @description this service create a new query in the db
   * @param {object} query message sent by the user via my portofolio
   */
  static async createQuery(query) {
    return await Query.create(query);
  }
  /**
   * @description this service get all queries in db
   */
  static async getQueries() {
    return await Query.find();
  }
}

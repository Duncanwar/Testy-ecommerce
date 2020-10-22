import QueryService from '../services/queries.service';
import responses from '../utils/responses';
import message from '../utils/customMessage';
import statusCode from '../utils/statusCode';

const { ok, created } = statusCode;
const { querySent, queryRetrieve } = message;
const { createQuery, getQueries } = QueryService;
const { successResponse } = responses;
/**
 * @description this controller deals with queries service
 */
export default class QueryController {
  /**
   * @description this controller send messages from the contact form to a service
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object of the message sent article
   */
  static async sendQuery(req, res) {
    const contactData = req.body;
    const contact = await createQuery(contactData);
    return successResponse(res, created, undefined, querySent, contact);
  }
  /**
   * @description this controller fetches all queries from database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json array object of all queries
   */
  static async retrieveQuery(req, res) {
    const query = await getQueries();
    return successResponse(res, ok, undefined, queryRetrieve, query);
  }
}

import QueryService from '../services/queries.service';
import responses from '../utils/responses';
import message from '../utils/customMessage';
import statusCode from '../utils/statusCode';

const { ok, created } = statusCode;
const { querySent, queryRetrieve } = message;
const { createQuery, getQueries } = QueryService;
const { successResponse, updateResponse } = responses;
/**
 * @description this controller deals with queries service
 */
export default class QueryController {
  static async sendQuery(req, res) {
    const contactData = req.body;
    await createQuery(contactData);
    return successResponse(res, created, '', querySent, '');
  }

  static async retrieveQuery(req, res) {
    const query = await getQueries();
    return successResponse(res, ok, '', queryRetrieve, query);
  }
}

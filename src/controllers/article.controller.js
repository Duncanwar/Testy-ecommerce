import ArticleServices from '../services/article.service';
import responses from '../utils/responses';
import statusCode from '../utils/statusCode';
import message from '../utils/customMessage';

const {
  getArticles,
  createArticle,
  getArticlesByTitle,
  deleteArticlesById,
  updateArticlesById,
} = ArticleServices;
const { ok, created } = statusCode;
const { articleDelete, articleUpdate, articleGet, articlePost } = message;
const { successResponse } = responses;
/**
 * @description this controller deals with article service
 */
export default class ArticleController {
  /**
   * @description this controller controlls saving an article in database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object of the created article
   */
  static async postArticle(req, res) {
    const contactData = req.body;
    const article = await createArticle(contactData);
    return successResponse(res, created, undefined, articlePost, article);
  }
  /**
   * @description this controller controlls fetching all articles in database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json array object of all articles
   */
  static async retrieveArticles(req, res) {
    const query = await getArticles();
    return successResponse(res, ok, undefined, articleGet, query);
  }
  /**
   * @description this controller controlls fetching one article in database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object of one article by title
   */
  static async retrieveArticlesByTitle(req, res) {
    const query = await getArticlesByTitle(req.params.title);
    return successResponse(res, ok, undefined, articleGet, query);
  }
  /**
   * @description this controller controlls updating one article in database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object of the updated article
   */
  static async updatingArticlesById(req, res) {
    const query = await updateArticlesById(req, req.params.id);
    return successResponse(res, ok, undefined, articleUpdate, query);
  }
  /**
   * @description this controller controlls deletes of one article in database
   * @param {object} req request
   * @param {object} res response
   * @returns {object} returns json object of the deleted article
   */
  static async removeArticlesById(req, res) {
    const query = await deleteArticlesById(req.params.id);
    return successResponse(res, ok, undefined, articleDelete, query);
  }
}

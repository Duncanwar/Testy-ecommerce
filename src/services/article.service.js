import Article from '../database/models/article.model';
import 'regenerator-runtime/runtime';

/**
 * @description This service deals with the Query model
 */
export default class ArticleServices {
  /**
   * @description this service create a new article in the db
   * @param {object} article message sent by the user via my portofolio
   * @returns {object} returns created article
   */
  static async createArticle(article) {
    return await Article.create(article);
  }
  /**
   * @description this service get all queries in db
   * @returns {object} returns all articles
   */
  static async getArticles() {
    return await Article.find();
  }
  /**
   * @description this service get all queries in db
   * @param {string} id the id on article
   * @returns {object} returns one article by Id
   */
  static async getArticlesById(id) {
    return await Article.findById(id);
  }
  /**
   * @description this service get all queries in db
   * @returns {object} returns one article by title
   */
  static async getArticlesByTitle(title) {
    return await Article.findOne({ Title: title });
  }
  /**
   * @description this service get all queries in db
   * @param {object} req request
   * @param {string} id the id of an article
   * @returns {object} returns updated article object
   */
  static async updateArticlesById(req, id) {
    return await Article.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
  }
  /**
   * @description this service get all queries in db
   * @param {string} id the id of an article
   * @returns {object} returns deleted article object
   */
  static async deleteArticlesById(id) {
    return await Article.findByIdAndDelete(id);
  }
}

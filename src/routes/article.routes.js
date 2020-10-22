import express from 'express';
import ArticleController from '../controllers/article.controller';
import { checkIfHasAdminPrivilege } from '../middlewares/admin.middleware';
import tokenAuthentication from '../middlewares/tokenAuthentication';

const router = express.Router();
const {
  postArticle,
  removeArticlesById,
  retrieveArticles,
  retrieveArticlesByTitle,
  updatingArticlesById,
} = ArticleController;

router.get('/articles', [tokenAuthentication], retrieveArticles);
router.get('/articles/:title', [tokenAuthentication], retrieveArticlesByTitle);

router.post(
  '/articles',
  [tokenAuthentication, checkIfHasAdminPrivilege],
  postArticle
);
router.patch(
  '/articles/:id',
  [tokenAuthentication, checkIfHasAdminPrivilege],
  updatingArticlesById
);
router.delete(
  '/articles/:id',
  [tokenAuthentication, checkIfHasAdminPrivilege],
  removeArticlesById
);

export default router;

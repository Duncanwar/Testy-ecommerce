import express from 'express';
import QueryController from '../controllers/queries.controller';
import { validateContact } from '../middlewares/contactValidation.middleware';
import tokenAuthentication from '../middlewares/tokenAuthentication';
import { checkIfHasAdminPrivilege } from '../middlewares/admin.middleware';

const router = express.Router();
const { sendQuery, retrieveQuery } = QueryController;

router.post('/queries', validateContact, sendQuery);
router.get(
  '/queries',
  [tokenAuthentication, checkIfHasAdminPrivilege],
  retrieveQuery
);
export default router;

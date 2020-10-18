import express from 'express';
import QueryController from '../controllers/queries.controller';
import { validateContact } from '../middlewares/contactValidation.middleware';

const router = express.Router();
const { sendQuery, retrieveQuery } = QueryController;

router.post('/queries', validateContact, sendQuery);
router.get('/queries', retrieveQuery);
export default router;

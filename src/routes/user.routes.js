import express from 'express';
import tokenAuthentication from '../middlewares/tokenAuthentication';
import UserController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';
import validations from '../middlewares/authValidation.middleware';
import { checkIfHasAdminPrivilege } from '../middlewares/admin.middleware';

const router = express.Router();

const { signup, login } = UserController;
const { checkLoginCredentials, userDuplicationAccount } = authMiddleware;
const { validateSignup, validateLogin } = validations;

router.post('/signup', [validateSignup, userDuplicationAccount], signup);
router.post('/login', [validateLogin, checkLoginCredentials], login);
//router.patch('/user', [tokenAuthentication, checkIfHasAdminPrivilege],);

export default router;

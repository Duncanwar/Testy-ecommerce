import express from 'express';
import tokenAuthentication from '../middlewares/tokenAuthentication';
import UserController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();
const { signup, login } = UserController;
const { checkLoginCredentials, userDuplicationAccount } = authMiddleware;

router.post('/signup', [userDuplicationAccount], signup);
router.post('/signin', [checkLoginCredentials], login);

router.patch('/update/userInfo/', [tokenAuthentication], (req, res) => {
  res.status(200).json({
    message: 'update user info',
  });
});

export default router;

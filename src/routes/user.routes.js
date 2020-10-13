import express from 'express';
import tokenAuthentication from '../middlewares/tokenAuthentication';
import UserController from '../controllers/user.controller'

const router = express.Router();
const {signup} = UserController

router
  .post('/signup',tokenAuthentication,signup)
  router.post('/signin');

router.patch('/update/userInfo/', (req, res) => {
  res.status(200).json({
    message: 'update user info',
  });
});

export default router;

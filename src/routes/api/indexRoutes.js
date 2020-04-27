import express from 'express'
import authRoutes from './auth/authroutes'
import profile from './profile/profileroutes'

const router = express.Router()

router.use(authRoutes);
router.use(profile);

export default router;
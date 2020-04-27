import express from 'express';
import cors from 'cors';
import api from './api/indexRoutes.js';
import auth from './api/auth/authroutes'

const router = express.Router();
const baseUrl = '/api/v1';

router.use(cors());
router.get('/api' , (req,res) =>
    res.status(200).send({
        message: 'Server setup Successfully',
    })
)

router.use(baseUrl,api);
router.use(auth);

export default router;
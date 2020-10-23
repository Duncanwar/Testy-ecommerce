import express from 'express';
import dotenv from 'dotenv';
import articleRoutes from './article.routes';
import queriesRoutes from './queries.routes';
import user from './user.routes';
import 'regenerator-runtime/runtime';

dotenv.config();

const router = express.Router();
const apiVersion = process.env.API_VERSION;
const baseUrl = `/api/${apiVersion}`;

router.use(baseUrl, articleRoutes);
router.use(baseUrl, queriesRoutes);
router.use(baseUrl, user);

export default router;

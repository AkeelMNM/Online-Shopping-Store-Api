import express from 'express';
import { getAllContent, storeContent } from '../controllers/contentController';

const contentRouter = express.Router();

contentRouter.post('/', storeContent);

contentRouter.get('/', getAllContent);

export { contentRouter };
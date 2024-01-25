import express from 'express';
import { createTour } from '../controllers/tourControllers.js';

const router = express.Router();

router.post('/', createTour);

export default router;
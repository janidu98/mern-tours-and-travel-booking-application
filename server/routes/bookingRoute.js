import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/create-booking', createBooking);
router.get('/:id', getBooking);
router.get('/get-all', getAllBooking);

export default router;
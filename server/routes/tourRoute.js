import express from 'express';
import { createTour, deleteTour, getAllTour, getTour, getTourBySearch, updateTour } from '../controllers/tourControllers.js';

const router = express.Router();

//create new tour
router.post('/create', createTour);
//update a tour
router.put('/update/:id', updateTour);
//delete a tour
router.delete('/delete/:id', deleteTour)
//get single tour
router.get('/get/:id', getTour);
//get all tour
router.get('/get', getAllTour);
//get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

export default router;
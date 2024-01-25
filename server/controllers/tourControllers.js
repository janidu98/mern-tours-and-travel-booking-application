import Tour from '../models/tourModel.js';
import { errorHandler } from '../utils/error.js';

//create new tour
export const createTour = async(req, res, next) => {
    const newTour = new Tour(req.body);

    try {       
        const saveTour = await  newTour.save();
        return res.status(200).json(saveTour);

    } catch (error) {
        next(error);
    }
}

//update tour
export const updateTour = async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if(!tour) {
        return next(errorHanlder(404, 'Tour is not found'));
    }

    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(updatedTour);

    } catch (error) {
        next(error);
    }
}

//delete tour
export const deleteTour = async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if(!tour) {
        return next(errorHandler(404, 'Tour is not found'));
    }

    try {
        await Tour.findByIdAndDelete(req.params.id);
        return res.status(200).json('Tour has been deleted');

    } catch (error) {
        next(error);
    }
}

//get single tour
export const getTour = async (req, res, next) => {
    const tour = await Tour.findById(req.params.id);
    if(!tour){
        return next(errorHandler(404, 'Tour is not found'));
    }

    try {
        return res.status(200).json(tour);

    } catch (error) {
        next(error);
    }
}

//get all tour
export const getAllTour = async (req, res, next) => {
    try {
        const tours = await Tour.find({});
        return res.status(200).json(tours);
    } catch (error) {
        next(error);
    }
}
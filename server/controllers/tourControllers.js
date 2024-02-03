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
    const tour = await Tour.findById(req.params.id).populate("reviews");
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

    //for pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).populate("reviews").skip(page * 8).limit(8);
        return res.status(200).json(tours);
    } catch (error) {
        next(error);
    }
}

//get tour by search
export const getTourBySearch = async (req, res, next) => {

    //here 'i' means case sensitive
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({ city, distance: {$gte:distance}, maxGroupSize:{$gte:maxGroupSize}}).populate("reviews");
        
        return res.status(200).json(tours);

    } catch (error) {
        next(error);
    }
}

//get featured tour
export const getFeaturedTour = async (req, res, next) => {

    try {
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
        return res.status(200).json(tours);
    } catch (error) {
        next(error);
    }
}

//get tour counts
export const getTourCount = async (req, res, next) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json(tourCount);

    } catch (error) {
        next(error);
    }
}
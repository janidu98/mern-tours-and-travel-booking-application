import Tour from '../models/tourModel.js';

export const createTour = async(req, res, next) => {
    const newTour = new Tour(req.body);

    try {       
        const saveTour = await  newTour.save();
        return res.status(200).json(saveTour);

    } catch (error) {
        next(error);
    }
}
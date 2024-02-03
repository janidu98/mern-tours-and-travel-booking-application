import Booking from "../models/bookingModel.js";
import { errorHandler } from "../utils/error.js";

//create booking
export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body);

    try {
        const savedBooking = await newBooking.save();

        return res.status(200).json({
            success: true,
            message: 'Booking is successfully created',
            data: savedBooking
        })

    } catch (error) {
        next(error);
    }
}

//get single booking
export const getBooking = async (req, res, next) => {
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);

        if(!book) {
            return next(errorHandler(404, 'Booking is not found!'));
        }

        return res.status(200).json(book);

    } catch (error) {
        next(error);
    }
}

//get all booking
export const getAllBooking = async (req, res, next) => {

    try {
        const books = await Booking.find();

        return res.status(200).json(books);

    } catch (error) {
        next(error);
    }
}
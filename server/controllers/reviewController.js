import Review from "../models/reviewModel.js";
import Tour from "../models/tourModel.js";

export const createReview = async (req, res, next) => {
    const tourId = req.params.tourId;
    const newReview = new Review({...req.body});

    try {
        const savedReview = await newReview.save();

        await Tour.findByIdAndUpdate(tourId, {
            $push: {reviews: savedReview._id}
        })

        return res.status(200).json({
            success: true,
            message: 'Review submitted',
            data: savedReview
        })

    } catch (error) {
        next(error)
    }
}
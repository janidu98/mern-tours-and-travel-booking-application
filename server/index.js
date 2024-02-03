import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tourRoute.js';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import reviewsRoute from './routes/reviewsRoute.js';
import bookingRoute from './routes/bookingRoute.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

const app = express();
const corsOptions = {
    origin: true,
    credentials: true
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


//call routes
app.use('/api/tour', tourRoute);
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/review', reviewsRoute);
app.use('/api/booking', bookingRoute);

//middleware
app.use((err, req, res, next) => {
    const message = err.messasge || 'Internal Server Error';
    const statusCode = err.statusCode || 500;
    
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER is running on port ${PORT}..`);
})
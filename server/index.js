import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error);
})

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER is running on port ${PORT}..`);
})
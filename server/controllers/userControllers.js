import User from '../models/userModel.js';
import { errorHandler } from '../utils/error.js';

//create new user
export const createUser = async(req, res, next) => {
    const newUser = new User(req.body);

    try {       
        const saveUser = await  newUser.save();
        return res.status(200).json(saveUser);

    } catch (error) {
        next(error);
    }
}

//update user
export const updateUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        return next(errorHanlder(404, 'User is not found'));
    }

    try {
        const updatedUser = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(updatedUser);

    } catch (error) {
        next(error);
    }
}

//delete user
export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        return next(errorHandler(404, 'User is not found'));
    }

    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json('User has been deleted');

    } catch (error) {
        next(error);
    }
}

//get single user
export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return next(errorHandler(404, 'User is not found'));
    }

    try {
        return res.status(200).json(user);

    } catch (error) {
        next(error);
    }
}

//get all users
export const getAllUsers = async (req, res, next) => {

    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}
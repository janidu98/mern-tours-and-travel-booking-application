import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

//user registration
export const register = async (req, res, next) => {
    try {
        //hash password
        const hashedPassword = await bcryptjs.hash(req.body.password, 10);
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            photo: req.body.photo
        });

        await newUser.save();
        return res.status(200).json({massage: 'Successfully created'})

    } catch (error) {
        next(error)
    }
}

//user login
export const login = async (req, res, next) => {

    const email = req.body.email;

    try {
        const user = await User.findOne({email});

        //if user does not exits
        if(!user){
            return next(errorHandler(404, 'User not found!'));
        }

        //check original password and entered password
        const confirmPassword = bcryptjs.compareSync(req.body.password, user.password);
        //if passwords are not matched
        if(!confirmPassword){
            return next(errorHandler(401, 'Wrong Credentials!'));
        }

        const {password, role, ...rest} = user._doc;

        //create jwt token
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '15d'}
        );

        //set token in the browser cookies and send the response to the client
        res
            .cookie("accessToken". token, {
                httpOnly: true,
                expires: token.expiresIn,
            })
            .status(200)
            .json({message: 'Successfully login', token, data: {...rest}, role});

    } catch (error) {
        next(error)
    }
}
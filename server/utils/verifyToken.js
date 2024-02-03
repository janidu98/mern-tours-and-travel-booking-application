import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if(!token) {
        return next(errorHandler(401, 'You are not authorize'));
    }

    //if token is exist  then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) {
            return next(errorHandler(401, 'Token is invalid'));
        }

        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.role === 'admin'){
            next();
        } else {
            return next(errorHandler(401, 'You are not authenticated'))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.role === 'admin'){
            next();
        } else {
            return next(errorHandler(401, 'You are not authorized'))
        }
    })
}
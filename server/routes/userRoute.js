import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js'

//update a user
router.put('/update/:id', verifyUser, updateUser);
//delete a user
router.delete('/delete/:id', verifyUser, deleteUser)
//get single user
router.get('/get/:id', verifyUser, getUser);
//get all user
router.get('/get', verifyAdmin, getAllUsers);

export default router;
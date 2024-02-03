import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();

//update a user
router.put('/update/:id', updateUser);
//delete a user
router.delete('/delete/:id', deleteUser)
//get single user
router.get('/get/:id', getUser);
//get all user
router.get('/get', getAllUsers);

export default router;
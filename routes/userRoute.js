import express from "express";
const router = express.Router();
import {
    getUser,
    setUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js'


router.route('/').get(getUser).post(setUser);
router.route('/:id').put(updateUser).delete(deleteUser);

export default router;
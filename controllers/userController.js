import User from '../models/userModel.js';
import asyncHandler from "express-async-handler";

const getUser = asyncHandler(async (req,res) => {
    const profile = await User.findOne({ email:"r@yahoo.com" });
    if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
})

const setUser = asyncHandler(async (req,res) => {
    const { name, email, phone, address } = req.body;
    const user = await User.create({
        name,email,phone,address
    });
    if (user) {
        res.status(200).json({message: "User created"});
    } else {
        throw new Error('Invalid user data');
    }
})

//router.route('/:id').put(updateUser).delete(deleteUser);
const updateUser = asyncHandler(async (req,res) => {
    const updatedData = req.body;
    const id = req.params.id;
    const profile = await User.findById(id);
    if (!profile) {
        return res.status(404).json({ message: "Profile not found"});
    }

    await User.findOneAndUpdate(
        {email:"r@gmail.com" }, updatedData, {new:true}
    )




    res.json(profile);
})


//router.route('/:id').put(updateUser).delete(deleteUser);
const deleteUser = asyncHandler(async (req,res) => {
    const id = req.params.id;
    const profile = await User.findById(id);
    if (!profile) {
        res.status(500).json({ message:"profile not found "});
    }

    res.status(200).json({message: `Delete user: ${req.params.id}`});
})

export {
    getUser,
    setUser,
    updateUser,
    deleteUser
};
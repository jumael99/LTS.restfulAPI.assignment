import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler'
import * as console from "node:console";

const connectDB = asyncHandler(async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB conected 🚀✨⚡");
});

export default connectDB;
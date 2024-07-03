import connectDB from './config/db.js'
import dotenv from 'dotenv';
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute.js'

const app = express();
const port = 5000;

app.use(bodyParser.json());

dotenv.config();
connectDB();

app.use('/api/profile', userRoute);

app.get('/', (req,res)=> {
    res.send("Good morning!");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
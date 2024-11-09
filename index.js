import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import milkRouter from './routes/milkRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_CLOUD_URL).then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ message: "App is runing!" });
});
app.use('/api/milks', milkRouter);
app.use('/api/users', userRouter);

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log("app is runing at " + port);
})
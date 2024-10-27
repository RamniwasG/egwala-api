import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import categoryRouter from './routes/categoryRouter.js';

const app = express();
const port = process.env.PORT || 5003;

dotenv.config();

mongoose.connect(process.env.MONGODB_CLOUD_URL).then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(cors());

app.get('/api', (req, res) => {
    res.send({ message: "App is runing!" });
});
app.use('/api/categories', categoryRouter);

app.listen(port, () => {
    console.log("app is runing at " + port);
})
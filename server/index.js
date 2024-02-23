import express from 'express';
import cors from 'cors';

import connectToMongo from './db.js';
import customersRoute from './routes/customers.js';
import authRoute from './routes/auth.js';
connectToMongo();   //database connection
const app = express();  //create an express app
const port = 5000;

app.use(cors());    //cors origin resource sharing
app.use(express.json());

app.use('/customers', customersRoute);     //Route for restaurants
app.use('/auth', authRoute);     //Route for authentication
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})
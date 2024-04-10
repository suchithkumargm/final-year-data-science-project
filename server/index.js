import express from 'express';
import cors from 'cors';

import connectToMongo from './db.js';
import authRoute from './routes/auth.js';
import customersRoute from './routes/customers.js';
import restaurantOwnerRoute from './routes/restaurantOwner.js';

connectToMongo();   //database connection
const app = express();  //create an express app
const port = 5000;

app.use(cors());    //cors origin resource sharing
app.use(express.json());

app.use('/auth', authRoute);     //Route for authentication
app.use('/customers', customersRoute);     //Route for restaurants
app.use('/restaurant-owner', restaurantOwnerRoute);     //Route for restaurants
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})
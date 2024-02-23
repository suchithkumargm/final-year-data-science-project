import { Router } from 'express';

import restaurantsRoute from './restaurants/restaurants.js'; //the path to restaurants route
import ordersRoute from './orders/orders.js'; //the path to orders route

const customerRouter = Router();

customerRouter.use('/restaurants',restaurantsRoute);

customerRouter.use('/orders',ordersRoute);

export default customerRouter;
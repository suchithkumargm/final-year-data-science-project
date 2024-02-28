import express from 'express';

import {
  getRestaurant,getRestaurantsByLocation,getLocations
} from '../../controllers/restaurants/restaurantController.js';

const router = express.Router();

// ROUTE 2: Get a specific restaurant using: GET "/restaurants/restaurant_id".
router.get('/getrestaurant/:id', getRestaurant);
router.get('/getallrestaurant/:location', getRestaurantsByLocation);
router.get('/getlocations', getLocations);

export default router;
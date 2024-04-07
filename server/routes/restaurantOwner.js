import { Router } from 'express';

import getRestaurantDetails from '../controllers/restaurantOwner/restaurantOwnerController.js';

const router = Router();

router.get('/getRestaurantDetails', getRestaurantDetails);

export default router;
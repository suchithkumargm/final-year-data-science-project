import express from 'express';
import { body } from 'express-validator';

import {
  createNewOrder,
  getCustomerOrders,
  getRestaurantRecommendations
} from '../../controllers/orders/orderController.js';

const router = express.Router();

router.post('/createNewOrder',createNewOrder)
router.get('/getCustomerOrders/:customer_id', getCustomerOrders);
router.get('/getRestaurantRecommendations', getRestaurantRecommendations);

export default router;
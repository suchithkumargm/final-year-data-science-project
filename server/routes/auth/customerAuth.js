import express from 'express';
import { body } from 'express-validator';

import { createCustomer, loginCustomer, getCustomer } from '../../controllers/auth/customerAuthController.js';
import fetchCustomer from '../../middleware/fetchCustomer.js';

const router = express.Router();

// ROUTE 1: Create a User using: POST "/auth/user/createuser". No login required
router.post(
    '/createCustomer',
    [
        body('name', 'Enter a valid name').isLength({ min: 5 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
        body('customerName', 'user name must be at least 5 characters').isLength({ min: 5 }),
    ],
    createCustomer
);

// ROUTE 2: Authenticate a User using: POST "/auth/user/login". No login required
router.post(
    '/login',
    [
        body('customerName', 'Enter a valid userName').isLength({min:5}),
        body('password', 'Password should be at least 5 characters').isLength({ min: 5 }),
    ],
    loginCustomer
);

// ROUTE 3: Get logged-in User Details using: POST "/auth/user/getuser". Login required
// pass the authToken in the req header to fetch the user
router.post('/getCustomer', fetchCustomer, getCustomer);

export default router;
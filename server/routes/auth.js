import { Router } from 'express';
import customerAuthRoute from './auth/customerAuth.js'; //the path to userAuth route


const authRouter = Router();

// Use the userAuthRoute for user-related authentication routes
authRouter.use('/customer', customerAuthRoute);


export default authRouter;
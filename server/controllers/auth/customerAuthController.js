import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Customer from '../../models/Customer.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Route to create a new user
export const createCustomer = async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        // Check if a user with the same email already exists
        let customer = await Customer.findOne({ email: req.body.email });
        let customerName = await Customer.findOne({ customerName: req.body.customerName });

        if (customer) {
            success = false;
            return res.status(400).json({ error: "Sorry, a user with this email already exists!" });
        }
        if (customerName) {
            success = false;
            return res.status(400).json({ error: "Sorry, a user with this UserName already exists!" });
        }

        // Generate a random 5-digit customer ID
        let customerId;
        do {
            customerId = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit number
        } while (await Customer.findOne({ customerId })); // Check if the generated customer ID already exists in the database

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user record in the database
        customer = await Customer.create({
            name: req.body.name,
            email: req.body.email,
            customerName: req.body.customerName,
            password: hashedPassword,
            customer_id: customerId // Store the generated customer ID
        });

        // Create an authentication token (JWT) for the new user
        const data = {
            customer: {
                id: customer.id,
            },
            role: 'customer', // Set the role to 'user' for user tokens
        };
        const authToken = jwt.sign(data, JWT_SECRET);

        success = true;
        res.json({ success, authToken, role: 'customer', customerId });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}


// Route to authenticate a user
export const loginCustomer = async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { customerName, password } = req.body;

    try {
        // Find the user by email
        let customer = await Customer.findOne({ customerName:customerName  });

        if (!customer) {
            success = false;
            return res.status(400).json({ success, error: "Invalid user credentials" });
        }

        // Compare the entered password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, customer.password);

        if (!passwordMatch) {
            success = false;
            return res.status(400).json({ success, error: "Invalid user credentials" });
        }

        // Create an authentication token (JWT) for the authenticated user
        const data = {
            customer: {
                id: customer.id,
            },
            role:'customer'
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken ,role:'customer' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

// Route to get user details (requires authentication)
export const getCustomer = async (req, res) => {
    try {
        // Get the user ID from the authenticated request
        const customerId = req.customer.id;

        // Retrieve user details from the database (excluding password)
        const customer = await Customer.findById(customerId).select("-password");

        res.send(customer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

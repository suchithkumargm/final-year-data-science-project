// import nodemailer from 'nodemailer';


// function generateOTP() {
//   const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random number between 1000 and 9999
//   return otp.toString(); // Convert the number to a string
// }


// // Define your email sending function
// export const sendEmailWithAttachment = async (req, res) => {
//   const  toEmail  = req.body.email;
//   try {
//     // Create a Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'shashidhar09735@gmail.com',
//         pass: 'ttrv ufjc eveo kxos'
//       }
//     });

//     // Define email options
//     let mailOptions = {
//       from: '"Shashidhar AS" <Shashidhar09735@gmail.com>',
//       to: toEmail,
//       subject: 'ZOMATO HELP || OTP for Reseting Password  ',
//       text: 'Hello Use this password for Your  Zomato Help Account',
//       html: `<b>Hi this is the OTP for reseting Password <br> OTP : ${generateOTP()}</b>`,
//       attachments: [
//         {
//           filename: '',
//           path: '' // Replace with the path to your file
//         }
//       ]
//     };

//     // Send mail with defined transport object
//     let info = await transporter.sendMail(mailOptions);

//     console.log('Message sent: %s', info.messageId);
//     res.status(200).json({ message: 'Email with attachment sent successfully' });
//   } catch (error) {
//     console.error('Error occurred:', error);
//     res.status(500).json({ message: 'Failed to send email with attachment' });
//     }
// };

import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import Customer from '../../models/Customer.js';
import bcrypt from 'bcryptjs';

// Declare email globally
let email;

// Function to generate OTP
function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random number between 1000 and 9999
  return otp.toString(); // Convert the number to a string
}

// Function to find user by email
export const findUserByEmail = async (email) => {
  try {
    const customer = await Customer.findOne({ email });
    return customer;
  } catch (error) {
    throw error;
  }
};

// Function to send email with OTP
export const sendEmailWithOTP = async (email, req) => {
  try {
    // Generate OTP
    const otp = generateOTP();

    // Store OTP in session
    req.session.generatedOTP = otp;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'shashidhar09735@gmail.com',
        pass: 'ttrv ufjc eveo kxos'
      }
    });

    // Define email options
    let mailOptions = {
      from: '"Shashidhar AS" <Shashidhar09735@gmail.com>',
      to: email,
      subject: 'ZOMATO HELP || OTP for Reseting Password',
      text: `Hello, Use this OTP for resetting your Zomato Help account: ${otp}`,
      html: `<b>Hi, this is the OTP for resetting Password: ${otp}</b>`
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    return { message: 'Email with OTP sent successfully' };
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
};

// Route handler with validation
export const forgotPassword = async (req, res) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    email = req.body.email; // Assign the email entered by the user to the global variable

    // Check if the email exists in the database
    const customer = await findUserByEmail(email);
    if (!customer) {
      return res.status(400).json({ error: "Sorry, no user with this email found!" });
    }

    // If the email is found in the database, proceed to send the OTP email
    const result = await sendEmailWithOTP(email, req);
    console.log(req.session.generatedOTP)
    res.status(200).json(result);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Failed to process request' });
  }
};

// Import required modules and dependencies

// Function to verify OTP
const verifyOTP = (enteredOTP, expectedOTP) => {
  return enteredOTP === expectedOTP;
};

// Route handler to verify OTP
export const verifyOTPHandler = async (req, res) => {
  try {
    const { custotp } = req.body;

    // Verify OTP
    console.log(req.session.generatedOTP)
    const otpMatched = verifyOTP(custotp, req.session.generatedOTP); // Compare with OTP stored in session
    
    if (!otpMatched) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Failed to verify OTP' });
  }
};

// Route handler to reset password
export const resetPasswordHandler = async (req, res) => {
  try {
    
    const {email }=req.params;
    const {  newPassword } = req.body;

    // Check if the email exists in the database
    const customer = await findUserByEmail(email); // Access email globally
    if (!customer) {
      return res.status(400).json({ error: "Sorry, no user with this email found!" });
    }

    // Update password in the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    customer.password = hashedPassword;
    await customer.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Failed to reset password' });
  }
};

import mongoose from 'mongoose';
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    name: {
       type: String,
       required: true 
    },
    email: {
       type: String,
       required: true,
       unique: true 
    },
    customerName:{
        type: String,
        required: true 
    },
    password: {
       type: String,
       required: true 
    },
    customer_id: {
       type: String,
       required: true 
    }
  });
const Customer = mongoose.model('customer', CustomerSchema);
export default Customer;
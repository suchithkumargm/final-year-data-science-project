import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    order_id: {
        type: Number,
        required: true,
        unique: true
    },
    customer_id: {
        type: Number,
        required: true
    },
    restaurant_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
    },
    location: {
        type: String
    },
    date: {
        type: String
    },
    cost: {
        type: Number
    },
    online_order: {
        type: Boolean,
    },
    book_table: {
        type: Boolean,
    }
});
const Order = mongoose.model('order', OrderSchema);
export default Order;
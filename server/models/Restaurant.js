import mongoose from 'mongoose';
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    restaurant_id: {
        type: Number,
        required: true,
        unique: true
    },
    url: {
        type: String
    },
    address: {
        type: String
    },
    name: {
        type: String
    },
    online_order: {
        type: Boolean
    },
    book_table: {
        type: Boolean
    },
    rating: {
        type: Number
    },
    votes: {
        type: Number
    },
    phone: {
        type: String
    },
    location: {
        type: String
    },
    rest_type: {
        type: String
    },
    dish_liked: {
        type: String
    },
    cuisines: {
        type: String
    },
    Cost2plates: {
        type: Number
    },
    Type: {
        type: String
    }
});
const Restaurant = mongoose.model('restaurant', RestaurantSchema);
export default Restaurant;
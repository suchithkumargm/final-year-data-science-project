import Restaurant from '../../models/Restaurant.js';

const getRestaurantDetails = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export default getRestaurantDetails;
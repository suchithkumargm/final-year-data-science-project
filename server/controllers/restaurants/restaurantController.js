import Restaurant from '../../models/Restaurant.js';

export const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({ restaurant_id: req.params.id });
    res.json(restaurant[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getRestaurantsByLocation = async (req, res) => {
  try {
    const { location } = req.params; // Assuming the location is provided as a URL parameter
    const restaurants = await Restaurant.find({ location }); // Query restaurants based on the provided location
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getLocations = async (req, res) => {
  try {
    const locations = await Restaurant.distinct('location');
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
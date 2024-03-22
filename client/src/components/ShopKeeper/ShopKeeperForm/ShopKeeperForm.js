import React from 'react';

import './ShopKeeperForm.css'

const ShopKeeperForm = () => {
    return (
        <>
            <h1 class="shopkeeper-form-name">Get a Feasibility Report to get started with your Restaurant Journey</h1>

            <form action="#" method="post" class="shopkeeper-form">
                <div class="form-element">
                    <label for="location">Location</label>
                    <select id="location" name="location">
                        <option value="new_york">New York</option>
                        <option value="los_angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                        <option value="san_francisco">San Francisco</option>
                    </select>
                </div>
                <div class="form-element">
                    <label for="type">Type</label>
                    <select id="type" name="type">
                        <option value="fast_food">Fast Food</option>
                        <option value="casual_dining">Casual Dining</option>
                        <option value="fine_dining">Fine Dining</option>
                        <option value="cafe">Cafe</option>
                    </select>
                </div>
                <div class="form-element">
                    <label for="type">Cuisines</label>
                    <select id="type" name="type">
                        <option value="fast_food">Fast Food</option>
                        <option value="casual_dining">Casual Dining</option>
                        <option value="fine_dining">Fine Dining</option>
                        <option value="cafe">Cafe</option>
                    </select>
                </div>

                <div class="form-element">
                    <label for="average_cost">Average Cost</label>
                    <input type="text" id="average_cost" name="average_cost" placeholder="Enter average cost" />
                </div>
                <div class="form-element">
                    <label for="restaurant_type">Restaurant Type</label>
                    <select id="restaurant_type" name="restaurant_type">
                        <option value="chain">Chain</option>
                        <option value="independent">Independent</option>
                    </select>
                </div>
                <div class="form-element">
                    <label for="restaurant_name">Restaurant Name</label>
                    <input type="text" id="restaurant_name" name="restaurant_name" placeholder="Enter restaurant name" />
                </div>
                <button type="submit" class="analysis-btn">Get Analysis</button>
            </form>
        </>
    )
}

export default ShopKeeperForm;

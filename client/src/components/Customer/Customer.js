import React from 'react'

import CustomerHome from './CustomerHome/CustomerHome';

const Customer = () => {
  return (
    <Route path="/browse-restaurants" element={<CustomerHome />} />
  )
}

export default Customer;

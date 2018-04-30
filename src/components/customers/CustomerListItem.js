import React from 'react';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ id, firstName, lastName }) => (
  <div>
    <Link to={`/customer/${id}`}>
      {lastName}, {firstName}
    </Link>
  </div>
);

export default CustomerListItem;
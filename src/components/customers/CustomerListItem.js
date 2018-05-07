import React from 'react';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ id, firstName, lastName, address, post, city, phoneNumber, email }) => (

  <div className="list-item">
    <Link to={`/customer/${id}`} className="list-item__data">
      <div>{lastName} {firstName}<br />{email}</div>
      <div>{address}<br />{post} {city}</div>
      <div>{phoneNumber}</div>
    </Link>
    <div className="list-item__actions menu-root">
      <i className="fa fa-ellipsis-h link"></i>
      <ul className="menu">
        <li className="menu__item"><Link to={`/customer/${id}`}>Poglej</Link></li>
        <li className="menu__item"><Link to={`/edit-customer/${id}`}>Uredi</Link></li>
        <li className="menu__item"><Link to={`/customer/${id}`}>Izbriši</Link></li>
      </ul>
    </div>
  </div>

);

export default CustomerListItem;


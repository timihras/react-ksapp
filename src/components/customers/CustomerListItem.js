import React from 'react';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ id, firstName, lastName, address, post, city, phoneNumber, email }) => (

  // <div className="list-item">
  //   <Link to={`/customer/${id}`} className="list-item__data">
  //     <div>
  //       <div className="list-item__initials">{firstName[0]}{lastName[0]}</div>
  //     </div>
  //     <div>{lastName} {firstName}<br /><span className="list-item--email">{email}</span></div>
  //     <div>{address}<br />{post} {city}</div>
  //     <div>{phoneNumber}</div>
  //   </Link>
  //   <div className="list-item__actions menu-root">
  //     <i className="fa fa-ellipsis-h link"></i>
  //     <ul className="menu">
  //       <li className="menu__item"><Link to={`/customer/${id}`}>Poglej</Link></li>
  //       <li className="menu__item"><Link to={`/edit-customer/${id}`}>Uredi</Link></li>
  //       <li className="menu__item"><Link to={`/customer/${id}`}>Izbriši</Link></li>
  //     </ul>
  //   </div>
  // </div>

  <div className="table__row">
    <Link to={`/customer/${id}`} className="table__cell table__cell--info">
      <div className="list__initials">{firstName}</div>
      <div>
        <div>{lastName} {firstName}</div>
        <div className="list__email">{email}</div>
      </div>
    </Link>
    <div className="table__cell">
      <div>{address}</div>
      <div>{post} {city}</div>
    </div>
    <div className="table__cell">{phoneNumber}</div>
    <div className="table__cell table__cell--small"><i className="fa fa-ellipsis-h link"></i></div>
  </div>

);

export default CustomerListItem;


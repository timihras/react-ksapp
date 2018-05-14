import React from 'react';
import { Link } from 'react-router-dom';

export const CustomerSummary = () => (
  <div className="page-header">
    <h1 className="page-header__title">Seznam strank</h1>
    <div className="page-header__actions">
      <Link className="button" to="/customers/add">
        <i className="far fa-plus-square"></i> Dodaj stranko
        </Link>
    </div>
  </div>
);

export default CustomerSummary;
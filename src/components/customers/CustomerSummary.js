import React from 'react';
import { Link } from 'react-router-dom';

export const CustomerSummary = () => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Seznam strank</h1>
      <div className="page-header__actions">
        <Link className="button" to="/customer/add">Dodaj stranko</Link>
      </div>
    </div>
  </div>
);

export default CustomerSummary;
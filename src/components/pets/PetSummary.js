import React from 'react';
import { Link } from 'react-router-dom';

export const PetSummary = () => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Seznam varovancev</h1>
      <div className="page-header__actions">
        <Link className="button" to="/pet/add">Dodaj varovanca</Link>
      </div>
    </div>
  </div>
);

export default PetSummary;
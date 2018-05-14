import React from 'react';
import { Link } from 'react-router-dom';

export const PetSummary = () => (
  <div className="page-header">
    <h1 className="page-header__title">Seznam varovancev</h1>
    <div className="page-header__actions">
      <Link className="button" to="/pets/add">
        <i className="far fa-plus-square"></i> Dodaj varovanca
      </Link>
    </div>
  </div>
);

export default PetSummary;
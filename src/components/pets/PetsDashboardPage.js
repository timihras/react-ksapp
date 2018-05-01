import React from 'react';
import { Link } from 'react-router-dom'
import PetList from './PetList';
import PetFilters from './PetFilters';

const PetsDashboardPage = () => (
  <div className="content-container">
    <Link className="button" to="/pet/add">Dodaj varovanca</Link>
    <PetFilters />
    <PetList />
  </div>
);

export default PetsDashboardPage;
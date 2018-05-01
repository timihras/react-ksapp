import React from 'react';
import Filters from '../Filters';
import PetList from './PetList';
import PetSummary from './PetSummary';

const PetsDashboardPage = () => (
  <div>
    <PetSummary />
    <Filters />
    <PetList />
  </div>
);

export default PetsDashboardPage;
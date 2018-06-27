import React from 'react';
import PetTable from './PetTable';
import PageTitle from '../common/PageTitle';


const PetsDashboardPage = () => (
  <div>
    <PageTitle title='Seznam hišnih ljubljenčkov' />
    <PetTable />
  </div>
);

export default PetsDashboardPage;
import React from 'react';
import CustomerTable from './CustomerTable';
import PageTitle from '../common/PageTitle';

const CustomersDashboardPage = () => (
  <div>
    <PageTitle title='Seznam lastnikov živali' />
    <CustomerTable />
  </div>
);

export default CustomersDashboardPage;
import React from 'react';
import Filters from '../Filters';
import CustomerList from './CustomerList';
import CustomerSummary from './CustomerSummary';

const CustomersDashboardPage = () => (
  <div>
    <CustomerSummary />
    <Filters />
    <CustomerList />
  </div>
);

export default CustomersDashboardPage;
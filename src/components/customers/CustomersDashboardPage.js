import React from 'react';
import { Link } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerListFilters from './CustomerListFilters';

const CustomersDashboardPage = () => (
  <div className="content-container">
    <Link className="button" to="/customer/add">Dodaj stranko</Link>
    <CustomerListFilters />
    <CustomerList />
  </div>
);

export default CustomersDashboardPage;
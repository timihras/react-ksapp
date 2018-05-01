import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectCustomers from '../../selectors/customers';
import CustomerListItem from './CustomerListItem';

const CustomerList = (props) => (
  <div>
    {props.customers.length === 0 ? (
      <div className="content-container">
        <span>V bazi ni nobene stranke</span>
      </div>
    ) : (
        props.customers.map((customer) => {
          return (<CustomerListItem key={customer.id} {...customer} />)
        })
      )}
  </div>
);

const mapStateToProps = (state) => ({
  customers: selectCustomers(state.customers, state.filters)
});

export default connect(mapStateToProps)(CustomerList);
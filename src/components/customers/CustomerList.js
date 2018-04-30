import React from 'react';
import { connect } from 'react-redux';
import selectCustomers from '../../selectors/customers';
import CustomerListItem from './CustomerListItem';

const CustomerList = (props) => (
  <div>
    <h1>Seznam strank</h1>
    <div>
      {props.customers.length === 0 ? (
        <div>
          <span>V bazi ni nobene stranke</span>
        </div>
      ) : (
          props.customers.map((customer) => {
            return (<CustomerListItem key={customer.id} {...customer} />)
          })
        )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  customers: selectCustomers(state.customers, state.filters)
});

export default connect(mapStateToProps)(CustomerList);
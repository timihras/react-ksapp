import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectCustomers from '../../selectors/customers';
import CustomerListItem from './CustomerListItem';

const CustomerList = (props) => (
  <div className="content-container">
    <div className="table">
      <div className="table__row table__row--header">
        <div className="table__cell">Info</div>
        <div className="table__cell">Naslov</div>
        <div className="table__cell">Telefon</div>
        <div className="table__cell table__cell--small"></div>
      </div>
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
  </div>
);

const mapStateToProps = (state) => ({
  customers: selectCustomers(state.customers, state.filters)
});

export default connect(mapStateToProps)(CustomerList);
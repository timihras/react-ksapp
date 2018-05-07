import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectCustomers from '../../selectors/customers';
import CustomerListItem from './CustomerListItem';

const CustomerList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-desktop">Info</div>
      <div className="show-for-desktop">Naslov</div>
      <div className="show-for-desktop">Telefon</div>
      <div className="show-for-desktop"></div>
    </div>
    <div className="list-body">
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

  </div >
);

const mapStateToProps = (state) => ({
  customers: selectCustomers(state.customers, state.filters)
});

export default connect(mapStateToProps)(CustomerList);
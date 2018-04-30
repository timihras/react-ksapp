import React from 'react';
import { connect } from 'react-redux';
import { startAddCustomer } from '../../actions/customers';
import CustomerForm from './CustomerForm';

export class CustomerAddPage extends React.Component {
  onSubmit = (customer) => {
    this.props.startAddCustomer(customer);
    this.props.history.push('/customers');
  };
  render() {
    return (
      <div>
        <div className="content-container">
          <h1>Dodaj stranko</h1>
        </div>
        <div>
          <CustomerForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddCustomer: (customer) => dispatch(startAddCustomer(customer))
});

export default connect(undefined, mapDispatchToProps)(CustomerAddPage);
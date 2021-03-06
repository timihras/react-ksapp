import React from 'react';
import { connect } from 'react-redux';
import { startAddCustomer } from '../../actions/customers';

export class CustomerAddPage extends React.Component {
  onSubmit = (customer) => {
    this.props.startAddCustomer(customer);
    this.props.history.push('/customers');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Dodaj stranko</h1>
          </div>
        </div>
        <div className="content-container">
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddCustomer: (customer) => dispatch(startAddCustomer(customer))
});

export default connect(undefined, mapDispatchToProps)(CustomerAddPage);
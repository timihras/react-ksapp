import React from 'react';
import { connect } from 'react-redux';
import CustomerForm from './CustomerForm'
import { startEditCustomer, startDeactivateCustomer } from '../../actions/customers';

export class CustomerEditPage extends React.Component {
  onSubmit = (customer) => {
    this.props.startEditCustomer(this.props.customer.id, customer);
    this.props.history.push('/customers');
  };
  onDisable = () => {
    this.props.startDeactivateCustomer(this.props.customer.id);
    this.props.history.push('/customers');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Uredi stranko</h1>
          </div>
        </div>
        <div className="content-container">
          <CustomerForm customer={this.props.customer} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onDisable}>Odstrani</button>
        </div>
      </div>

    );
  };
};

const mapStateToProps = (state, props) => ({
  customer: state.customers.find((customer) => customer.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates)),
  startDeactivateCustomer: (id) => dispatch(startDeactivateCustomer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEditPage);
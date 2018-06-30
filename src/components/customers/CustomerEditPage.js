import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { startEditCustomer, startDeactivateCustomer } from '../../actions/customers';
import { Paper, Button } from '@material-ui/core';

import CustomerForm from '../forms/CustomerForm';
import PageHeader from '../common/PageHeader';
import AlertDialog from '../common/AlertDialog';
import Spinner from '../common/Spinner';

export class CustomerEditPage extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, address, post, city, email, phoneNumber } = this.props.values.c;
    const updates = { firstName, lastName, address, post, city, email, phoneNumber }
    const { goBack } = this.props.history;
    return this.props.startEditCustomer(this.props.customer.id, updates).then(() => {
      goBack();
    });
  };

  onDialogSubmit = () => {
    this.onDeactivate();
  };

  onDeactivate = () => {
    const { goBack } = this.props.history;
    return this.props.startDeactivateCustomer(this.props.customer.id).then(() => {
      goBack();
    });
  };
  render() {
    const { customer } = this.props;
    const { goBack } = this.props.history;
    return (
      <div>
        {customer ? (
          <div>
            <PageHeader
              subtitle="podatke za lastnika hišnega ljubljenčka"
              title="Uredi"
              goBack={goBack}
            />
            <Paper>
              <form className="form" onSubmit={this.onSubmit}>
                <CustomerForm c={customer} />
                <div className="form__actions">
                  <AlertDialog
                    buttonName="Izbriši"
                    dialogText="Ali si prepričan/a da želiš izbrisati zapis?"
                    onDialogSubmit={this.onDialogSubmit}
                  />
                  <Button type="submit" onClick={this.onSubmit} variant="contained" color="primary">
                    Uredi
                  </Button>
                </div>
              </form>
            </Paper>
          </div>
        ) : (
            <Spinner />
          )
        }
      </div>

    );
  };
};

const mapStateToProps = (state, props) => ({
  customer: state.customers.find((customer) => customer.id === props.match.params.id),
  values: getFormValues('boardingForm')(state),
});

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates)),
  startDeactivateCustomer: (id) => dispatch(startDeactivateCustomer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEditPage);
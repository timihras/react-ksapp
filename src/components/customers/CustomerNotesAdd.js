import React, { Component } from 'react';
import { connect } from 'react-redux'
import NotesForm from '../forms/NotesForm';
import { startEditCustomer } from '../../actions/customers';

class CustomerNotesAdd extends Component {
  onSubmit = (note) => {
    const notes = this.props.customer.notes ? this.props.customer.notes : [];
    notes.push(note);
    this.props.startEditCustomer(this.props.customer.id, { notes });
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Dodaj opombo stranke</h1>
          </div>
        </div>
        <div className="content-container">
          <NotesForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  customer: state.customers.find((customer) => customer.id === props.location.state.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerNotesAdd);
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startEditCustomer } from '../../actions/customers';
import CustomerNotesListItem from './CustomerNotesListItem';

class CustomerNotesList extends React.Component {
  onDelete = (id) => {
    const notes = this.props.customer.notes.filter((note) => note.created !== id);
    this.props.startEditCustomer(this.props.customer.id, { notes });
  };

  render() {
    const paramsTo = {
      pathname: "/customer/note-add/",
      state: {
        id: this.props.customer.id
      }
    };

    return (
      <div className="notes">
        <h2>Opombe</h2>
        {
          this.props.customer.notes && this.props.customer.notes.length !== 0 ? (
            this.props.customer.notes.map((note) =>
              <CustomerNotesListItem
                key={note.created}
                {...note}
                onDelete={this.onDelete}
              />)
          ) : (
              <p>Ni opomb</p>
            )
        }
        <Link to={paramsTo}> Dodaj opombo</Link>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates))
});

export default connect(undefined, mapDispatchToProps)(CustomerNotesList);
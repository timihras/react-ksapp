import React, { Component } from 'react';
import NotesForm from '../NotesForm';

class CustomerNotesAdd extends Component {
  onSubmit = (note) => {
    console.log('note submitted', note);
    this.props.navigation.goBack();
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

export default CustomerNotesAdd;
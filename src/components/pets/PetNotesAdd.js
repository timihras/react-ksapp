import React from 'react';
import { connect } from 'react-redux';
import { startEditPet } from '../../actions/pets';
import NotesForm from '../NotesForm'

class PetNotesAdd extends React.Component {
  onSubmit = (note) => {
    const notes = this.props.pet.notes ? this.props.pet.notes : [];
    notes.push(note);
    this.props.startEditPet(this.props.location.state.id, { notes });
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Dodaj opombo ljubljenčka</h1>
          </div>
        </div>
        <div className="content-container">
          <NotesForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  pet: state.pets.find((pet) => pet.id === props.location.state.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetNotesAdd);
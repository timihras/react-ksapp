import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { startEditPet } from '../../actions/pets';
import NotesListItem from '../NotesListItem';

class PetNotesList extends React.Component {
  onDelete = (id) => {
    const notes = this.props.notes.filter((note) => note.created !== id);
    this.props.startEditPet(this.props.id, { notes });
  };

  render() {
    const paramsTo = {
      pathname: '/pets/note-add',
      state: {
        id: this.props.id
      }
    }
    return (
      <div className="profile-notes">
        <h2>Opombe</h2>
        {this.props.notes && this.props.notes.length !== 0 ? (
          this.props.notes.map((note) =>
            <NotesListItem
              key={note.created}
              {...note}
              onDelete={this.onDelete}
            />)
        ) : (
            <p>Ni opomb</p>
          )}
        <Link to={paramsTo}>Dodaj opombo</Link>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates))
});

export default connect(undefined, mapDispatchToProps)(PetNotesList);
import React from 'react';
import { Link } from 'react-router-dom'

import CustomerNotesListItem from './CustomerNotesListItem';

const CustomerNotesList = (props) => (
  <div className="notes">
    <h2>Opombe</h2>
    <Link to="/add-note">Dodaj opombo</Link>
    {props.notes ? (
      props.notes.map((note) => <CustomerNotesListItem key={note.created} {...note} />)
    ) : (
        <p>Ni opomb</p>
      )}
  </div>
);

export default CustomerNotesList;
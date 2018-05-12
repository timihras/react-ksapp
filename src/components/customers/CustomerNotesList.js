import React from 'react';
import { Link } from 'react-router-dom'

import CustomerNotesListItem from './CustomerNotesListItem';

const CustomerNotesList = (props) => {

  const paramsTo = {
    pathname: "/customer/note-add/",
    state: {
      id: props.customer.id
    }
  };

  console.log('test', paramsTo);

  return (
    <div className="notes">
      <h2>Opombe</h2>
      <Link to={paramsTo}> Dodaj opombo</Link>
      {
        props.customer.notes ? (
          props.customer.notes.map((note) => <CustomerNotesListItem key={note.created} {...note} />)
        ) : (
            <p>Ni opomb</p>
          )
      }
    </div>
  )
};

export default CustomerNotesList;
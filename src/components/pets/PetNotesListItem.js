import React from 'react';
import moment from 'moment'

const PetNotesListItem = (props) => {
  return (
    <div>
      {props.text},
      {props.author},
      {moment(props.created).format('DD. MM. YYYY')}
      <i className="fas fa-trash link" onClick={() => props.onDelete(props.created)}></i>
    </div>
  );
};

export default PetNotesListItem;
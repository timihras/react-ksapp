import React from 'react';
import moment from 'moment';

export const CustomerNotesListItem = (props) => {
  return (
    <div className="note">
      <div className="note__text">{props.text}</div>
      <div className="note__info">
        <div className="note__author">
          Napisal/a <span>{props.author}</span>, dne {moment(props.created).format('DD. MM. YYYY')}
        </div>
        <div className="note__action">
          <i
            className="fas fa-trash link"
            onClick={() => props.onDelete(props.created)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CustomerNotesListItem;
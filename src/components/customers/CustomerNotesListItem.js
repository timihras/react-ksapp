import React from 'react';
import moment from 'moment';

export const CustomerNotesListItem = (props) => {
  return (
    <div>
      {props.text},
      {props.author},
      {moment(props.created).format('MMMM Do, YYYY')}
    </div>
  )
}

export default CustomerNotesListItem;
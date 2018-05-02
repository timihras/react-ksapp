import React from 'react'

export const CustomerNotesListItem = (props) => {
  return (
    <div>
      {props.text},
      {props.author},
      {props.created}
    </div>
  )
}

export default CustomerNotesListItem;
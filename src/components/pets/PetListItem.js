import React from 'react'
import {Link} from 'react-router-dom'

const PetListItem = ({id, name, breed}) => {
  return (
    <div>
      <Link to={`/pet/${id}`}>{name}, {breed}</Link>
    </div>
  )
}

export default PetListItem;
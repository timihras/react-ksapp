import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PetListItem from './PetListItem';
import selectPets from '../../selectors/pets';

const PetList = (props) => (
  <div className="content-container">

    <div className="table">
      <div className="table__row table__row--header">
        <div className="table__cell">Info</div>
        <div className="table__cell">pasma</div>
        <div className="table__cell">Leto rojstva</div>
        <div className="table__cell table__cell--small"></div>
      </div>
      <div>
        {props.pets.lenth === 0 ? (
          <div className="content-container">
            <span>V bazi ni nobenega varovanca</span>
          </div>
        ) : (
            props.pets.map((pet) => <PetListItem key={pet.id} {...pet} />)
          )}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  pets: selectPets(state.pets, state.filters)
});

export default connect(mapStateToProps)(PetList);
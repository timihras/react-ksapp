import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PetListItem from './PetListItem';
import selectPets from '../../selectors/pets';

export class PetList extends React.Component {
  render() {
    return (
      <div>
        {this.props.pets.lenth === 0 ? (
          <div className="content-container">
            <span>V bazi ni nobenega varovanca</span>
          </div>
        ) : (
            this.props.pets.map((pet) => {
              return <PetListItem key={pet.id} {...pet} />
            })
          )}
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  pets: selectPets(state.pets, state.filters)
});

export default connect(mapStateToProps)(PetList);
import React from 'react';
import { connect } from 'react-redux'
import PetListItem from './PetListItem';
import selectPets from '../../selectors/pets';

export class PetList extends React.Component {
  render() {
    return (
      <div>
        <h1>Seznam ljubljenčkov</h1>

        {this.props.pets.map((pet) => {
          return <PetListItem key={pet.id} {...pet} />
        })}

      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  pets: selectPets(state.pets, state.filters)
});

export default connect(mapStateToProps)(PetList);
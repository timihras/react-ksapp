import React, { Component } from 'react';
import { connect } from 'react-redux';

import PetForm from './PetForm';
import {startAddPet} from '../../actions/pets';

export class PetAddPage extends Component {
  onSubmit = (pet) => {
    this.props.startAddPet(pet);
    this.props.history.push('/pets')
  };
  render() {
    return (
      <div className="content-container">
        <h1>Dodaj novega ljubljenčka</h1>
        <PetForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddPet: (pet) => dispatch(startAddPet(pet))
});

export default connect(undefined, mapDispatchToProps)(PetAddPage);

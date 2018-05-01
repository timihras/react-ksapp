import React, { Component } from 'react';
import { connect } from 'react-redux';

import PetForm from './PetForm';
import { startAddPet } from '../../actions/pets';

export class PetAddPage extends Component {
  onSubmit = (pet) => {
    this.props.startAddPet(pet);
    this.props.history.push('/pets')
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Dodaj ljubljenčka</h1>
          </div>
        </div>
        <div className="content-container">
          <PetForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddPet: (pet) => dispatch(startAddPet(pet))
});

export default connect(undefined, mapDispatchToProps)(PetAddPage);

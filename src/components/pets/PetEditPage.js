import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startEditPet, startDeactivatePet } from '../../actions/pets';
import PetForm from './PetForm';

export class PetEditPage extends Component {
  onSubmit = (pet) => {
    this.props.startEditPet(this.props.pet.id, pet);
    this.props.history.push('/pets');
  }
  onDeactivate = () => {
    this.props.startDeactivatePet(this.props.pet.id);
    this.props.history.push('/pets');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Uredi ljubljenčka</h1>
          </div>
        </div>
        <div className="content-container">

          <PetForm pet={this.props.pet} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onDeactivate}>Odstrani</button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  pet: state.pets.find(({ id }) => id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates)),
  startDeactivatePet: (id) => dispatch(startDeactivatePet(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetEditPage);

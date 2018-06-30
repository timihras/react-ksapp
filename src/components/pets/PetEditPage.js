import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { startEditPet, startDeactivatePet } from '../../actions/pets';
import { Button, Paper } from '@material-ui/core';

import PetForm from '../forms/PetForm';
import PageHeader from '../common/PageHeader';
import AlertDialog from '../common/AlertDialog';
import Spinner from '../common/Spinner';

export class PetEditPage extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const { name, breed, gender, birth, type } = this.props.values.p;
    const updates = { name, breed, gender, birth, type };
    const { goBack } = this.props.history;
    return this.props.startEditPet(this.props.pet.id, updates).then(() => {
      goBack();
    });
  };

  onDialogSubmit = () => {
    this.onDeactivate();
  };

  onDeactivate = () => {
    const { goBack } = this.props.history;
    return this.props.startDeactivatePet(this.props.pet.id).then(() => {
      goBack();
    });
  };

  render() {
    const { pet } = this.props;
    const { goBack } = this.props.history;
    return (
      <div>
        {pet ? (
          <div>
            <PageHeader
              subtitle="podatke hišnega ljubljenčka"
              title="Uredi"
              goBack={goBack}
            />
            <Paper>
              <form className="form" onSubmit={this.onSubmit}>
                <PetForm p={pet} />
                <div className="form__actions">
                  <AlertDialog
                    buttonName="Izbriši"
                    dialogText="Ali si prepričan/a da želiš izbrisati zapis?"
                    onDialogSubmit={this.onDialogSubmit}
                  />
                  <Button type="submit" onClick={this.onSubmit} variant="contained" color="primary">
                    Uredi
                  </Button>
                </div>
              </form>
            </Paper>
          </div>
        ) : (
            <Spinner />
          )
        }
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  pet: state.pets.find(({ id }) => id === props.match.params.id),
  values: getFormValues('boardingForm')(state),
});

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates)),
  startDeactivatePet: (id) => dispatch(startDeactivatePet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetEditPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues, reset } from 'redux-form';

import { startEditPet, startDeactivatePet } from '../../actions/pets';
import { Button, Paper } from '@material-ui/core';

import PetForm from '../forms/PetForm';
import PageHeader from '../common/PageHeader';
import AlertDialog from '../common/AlertDialog';
import Spinner from '../common/Spinner';

export class PetEditPage extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const updates = this.props.values.p;
    const { goBack } = this.props.history;
    this.props.startEditPet(this.props.pet.id, updates);
    goBack();
  };

  onDialogSubmit = () => {
    this.onDeactivate();
  };

  onDeactivate = () => {
    this.props.startDeactivatePet(this.props.pet.id);
    const { goBack } = this.props.history;
    goBack();
  };

  render() {
    const { goBack } = this.props.history;
    const { pet } = this.props;
    const p = this.props.pet;
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
                <PetForm p={p} />
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
  values: getFormValues('dog-boarding')(state)
});

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates)),
  startDeactivatePet: (id) => dispatch(startDeactivatePet(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetEditPage);

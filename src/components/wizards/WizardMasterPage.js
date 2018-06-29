import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { getFormValues, reset } from 'redux-form';
import { submitWizard } from '../../actions/wizard';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CustomerForm from '../forms/CustomerForm';
import GuardianForm from '../forms/GuardianForm';
import PetDetailsForm from '../forms/PetDetailsForm';
import SummaryForm from '../forms/SummaryForm';
import PetForm from '../forms/PetForm';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return [
    'Podatki o lastniku',
    'Podatki za nujne primere',
    'Podatki o ljubljenčku',
    'Podrobnosti o ljubljenčku',
    'Povzetek'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CustomerForm />;
    case 1:
      return <GuardianForm />;
    case 2:
      return <PetForm />;
    case 3:
      return <PetDetailsForm />;
    case 4:
      return <SummaryForm />;
    default:
      return 'Unknown step';
  }
}

class WizardMasterPage extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleSubmit = () => {
    const formData = this.props.values;
    return this.props.submitWizard(formData).then(() => {
      this.props.reset();
      this.setState({
        activeStep: this.state.activeStep + 1,
      });
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.props.reset();
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Paper>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {getStepContent(index)}
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                          tabIndex="-1"
                        >
                          Back
                        </Button>
                        {activeStep === steps.length - 1 ?
                          (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={this.handleSubmit}
                              className={classes.button}
                            >
                              Finish
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={this.handleNext}
                              className={classes.button}
                            >
                              Next
                            </Button>
                          )
                        }
                      </div>
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Paper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Vsi koraki so uspešno izpolnjeni.</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Vnesi novega
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

WizardMasterPage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  values: getFormValues('dog-boarding')(state)
})

const mapDispatchToProps = (dispatch) => ({
  submitWizard: (formData) => dispatch(submitWizard(formData)),
  reset: () => dispatch(reset('dog-boarding'))
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(WizardMasterPage);
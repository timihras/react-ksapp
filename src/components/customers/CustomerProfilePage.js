import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Spinner from '../common/Spinner';
import CustomerPetsList from './CustomerPetsList';
import CustomerNotesList from './CustomerNotesList';
import CustomerInfoTable from './CustomerInfoTable';
import CustomerHeader from './CustomerHeader';
import CustomerInfoAvatar from './CustomerInfoAvatar';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

const CustomerProfilePage = (props) => {
  const { classes, customer, pets } = props;
  const { goBack } = props.history;

  return (
    <div>
      {
        customer ? (
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <CustomerInfoAvatar customer={customer} goBack={goBack} />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Paper className={classes.paper}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <CustomerHeader customer={customer} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomerInfoTable customer={customer} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomerPetsList pets={pets} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <CustomerNotesList customer={customer} />
            </Grid>
          </div>
        ) : (
            <Spinner />
          )
      }
    </div>
  );
}

CustomerProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: state.customers.find(({ id }) => id === props.match.params.id),
  pets: state.pets.filter((pet) => pet.owner === props.match.params.id)
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(CustomerProfilePage);
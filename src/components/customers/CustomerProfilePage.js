import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Spinner from '../common/Spinner';

import NotesList from '../NotesList';
import ProfilePageHeader from '../ProfilePageHeader';
import ProfilePageInfoAvatar from '../ProfilePageInfoAvatar';
import CustomerInfoTable from './CustomerInfoTable';
import CustomerPetsList from './CustomerPetsList';


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
                <ProfilePageInfoAvatar
                  favorite={customer.favorite}
                  goBack={goBack}
                  text={customer.firstName[0].toUpperCase() + customer.lastName[0].toUpperCase()}
                  abc={'A'}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Paper className={classes.paper}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <ProfilePageHeader
                        editLink={`edit-customer/${customer.id}`}
                        subtitle={customer.email}
                        title={`${customer.firstName} ${customer.lastName}`}
                      />
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
              <NotesList
                module='customers'
                id={customer.id}
                notes={customer.notes}
              />
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
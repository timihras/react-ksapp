import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import petSelector from '../../selectors/petDetails';
import Spinner from '../common/Spinner';

import NotesList from '../NotesList';
import ProfilePageHeader from '../ProfilePageHeader';
import ProfilePageInfoAvatar from '../ProfilePageInfoAvatar';
import PetsInfoTable from './PetsInfoTable';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  }
});

const PetProfilePage = (props) => {

  const { goBack } = props.history;
  const { pet, classes } = props;

  return (
    <div>
      {
        pet ? (
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <ProfilePageInfoAvatar
                  favorite={pet.favorite}
                  goBack={goBack}
                  text={pet.name[0].toUpperCase()}
                  abc={'A'}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Paper className={classes.paper}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <ProfilePageHeader
                        editLink={`/edit-pet/${pet.id}`}
                        subtitle={pet.breed}
                        title={pet.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <PetsInfoTable pet={pet} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <NotesList
                  module='pets'
                  id={pet.id}
                  notes={pet.notes}
                />
              </Grid>
            </Grid>
          </div>
        ) : (
            <Spinner />
          )
      }
    </div>
  );
};

PetProfilePage.propTypes = ({
  classes: PropTypes.object.isRequired,
});

const mapStateToProps = (state, props) => ({
  pet: petSelector(state.pets, state.customers, props.match.params.id),
});

export default
  compose(
    connect(mapStateToProps),
    withStyles(styles)
  )(PetProfilePage);

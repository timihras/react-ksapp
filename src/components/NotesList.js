import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { startEditCustomer } from '../actions/customers';
import { startEditPet } from '../actions/pets';

import NotesListItem from './NotesListItem';

const styles = theme => ({
  root: {
    width: '100%',
  },
  divider: {
    margin: '2rem',
  },
  flex: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 2rem'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class NotesList extends React.Component {
  onDelete = (noteId) => {
    const { module, notes, id } = this.props;
    const newNotes = notes.filter((note) => note.created !== id);

    if (module === 'customers') {
      this.props.startEditCustomer(id, { newNotes });
    }
    else if (module === 'pets') {
      this.props.startEditPet(id, { newNotes });
    }
  };

  render() {

    const { notes, module, classes, id } = this.props;
    const paramsTo = {
      pathname: `/${module}/note-add/`,
      state: {
        id
      }
    };
    return (
      <div className={classes.root}>
        <Divider className={classes.divider} />
        <div className={classes.flex}>
          <Typography variant="subheading">
            Opombe
          </Typography>
          <Button component={Link} to={paramsTo} color="primary" className={classes.button}>
            <AddCircleIcon className={classes.leftIcon} />
            Dodaj opombo
          </Button>
        </div>
        <Paper className={classes.paper}>
          <List>
            {
              notes && notes.length > 0 ? (
                notes.map((note, i) => (
                  <NotesListItem
                    key={note.created}
                    {...note}
                    onDelete={this.onDelete}
                    last={notes.length === i + 1}
                  />
                ))
              ) : (
                  <ListItem>
                    <ListItemText>Ni opomb</ListItemText>
                  </ListItem>
                )
            }
          </List>
        </Paper>
      </div>
    );
  };
};


NotesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates)),
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates))
});

export default compose(
  withStyles(styles),
  connect(undefined, mapDispatchToProps)
)(NotesList);
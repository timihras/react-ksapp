import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import moment from 'moment';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { startEditCustomer } from '../actions/customers';
import { startEditPet } from '../actions/pets';

import NotesListItem from './NotesListItem';
import NoteAdd from './NoteAdd';

const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
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
});

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  onDelete = (noteId) => {
    const { module, id } = this.props;
    const notes = this.props.notes.filter((note) => note.created !== noteId);
    if (module === 'customers') {
      this.props.startEditCustomer(id, { notes });
    }
    else if (module === 'pets') {
      this.props.startEditPet(id, { notes });
    }
  };

  handleSubmit = (text) => {
    const { module, id, auth } = this.props
    if (text) {
      const note = [{
        author: auth.displayName,
        created: moment().valueOf(),
        text,
      }]

      const _notes = this.props.notes ? this.props.notes : [];
      const notes = _notes.concat(note);

      if (module === 'pets') {
        this.props.startEditPet(id, { notes });
      }

      if (module === 'customers') {
        this.props.startEditCustomer(id, { notes });
      }
    }
  };

  render() {

    const { notes, module, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <Typography variant="subheading">
            Opombe za {module === 'pets' ? 'hišnega ljubljenčka' : 'stranko'}
          </Typography>
          <NoteAdd
            module={module}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <Paper className={classes.paper}>
          <List dense>
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

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates)),
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(NotesList);
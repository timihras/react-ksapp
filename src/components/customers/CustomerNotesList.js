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

import { startEditCustomer } from '../../actions/customers';
import NotesListItem from '../NotesListItem';

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

class CustomerNotesList extends React.Component {
  onDelete = (id) => {
    const notes = this.props.customer.notes.filter((note) => note.created !== id);
    this.props.startEditCustomer(this.props.customer.id, { notes });
  };

  render() {
    const paramsTo = {
      pathname: "/customers/note-add/",
      state: {
        id: this.props.customer.id
      }
    };
    const { classes } = this.props;
    const { notes } = this.props.customer;
    return (
      <div className={classes.root}>
        <Divider className={classes.divider} />
        <div className={classes.flex}>
          <Typography variant="subheading">
            Opombe za izbrano osebo
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
                notes.map(note => (
                  <NotesListItem
                    key={note.created}
                    {...note}
                    onDelete={this.onDelete}
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


CustomerNotesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates))
});

export default compose(
  withStyles(styles),
  connect(undefined, mapDispatchToProps)
)(CustomerNotesList);
import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import cleanText from '../utils/cleanText';

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class NoteAdd extends React.Component {
  state = {
    open: false,
    note: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      note: '',
      error: ''
    });
  };

  handleSubmit = () => {
    const text = cleanText(this.state.note);

    if (text) {
      this.props.handleSubmit(text);
      this.setState({ open: false, note: '' });
    } else {
      this.setState({ error: 'Besedilo je prazno' })
    }
  };

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState({
      note,
      error: ''
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>
          <AddCircleIcon className={classes.leftIcon} />
          Dodaj opombo
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="add-new-note"
          fullWidth
        >
          <DialogTitle id="add-new-note">Vnos nove opombe</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              id="note"
              label="Besedilo opombe"
              helperText={this.state.error}
              error={!!this.state.error}
              multiline
              rows={4}
              fullWidth
              onChange={this.onNoteChange}
              value={this.state.note}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" tabindex="-1">
              Prekliči
            </Button>
            <Button onClick={this.handleSubmit} variant="contained" color="primary">
              Dodaj
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

NoteAdd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoteAdd);
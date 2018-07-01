import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ChangeOwnerAutosuggest from './ChangeOwnerAutosuggest';
import { startEditPet } from '../../actions/pets';


class ChangeOwnerDialog extends React.Component {
  state = {
    open: false,
    selected: null,
    error: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    if (this.state.selected) {
      this.props.startEditPet(this.props.pet.id, { owner: this.state.selected });
      this.setState({ open: false, selected: null });
    } else {
      this.setState({ error: 'Prosim izberi lastnika!' });
    }
  }

  handleSelect = (id) => {
    this.setState({ selected: id })
  }

  render() {
    const { error } = this.state;
    return (
      <div className="info-table__inline-button">
        <IconButton>
          <CompareArrowsIcon onClick={this.handleClickOpen} />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Zamenjaj lastnika hišnega ljubljenčka</DialogTitle>
          <DialogContent>
            <ChangeOwnerAutosuggest handleSelect={this.handleSelect} />
            {error && <Typography variant="caption" color='secondary'>{error}</Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" tabIndex="-1">
              Prekliči
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Potrdi
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates))
});

export default connect(undefined, mapDispatchToProps)(ChangeOwnerDialog);
import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/ModeEdit';

import { startEditPet } from '../../actions/pets';
import { startEditCustomer } from '../../actions/customers';
import { Typography } from '@material-ui/core';


class EditTextProperty extends React.Component {
  state = {
    open: false,
    property: null,
    value: '',
    error: null,
  };

  componentDidMount() {
    const { property } = this.props;
    for (let key in property) {
      this.setState({
        property: key,
        value: property[key] ? property[key] : ''
      });
    };
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    const { module, id } = this.props;
    const { property, value } = this.state;
    const updates = { [property]: value };

    if (module === 'customers') {
      this.props.startEditCustomer(id, updates);
    }
    else if (module === 'pets') {
      this.props.startEditPet(id, updates);
    } else {
      console.error('Napaka v aplikaciji: Nastavi prop module!');
    }
    this.handleClose();
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { error } = this.state;
    const { title, label, property } = this.props;
    return (
      <div className="info-table__inline-button">
        <IconButton>
          <EditIcon onClick={this.handleClickOpen} />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby={label.replace(/ /g, '')}
          fullWidth
        >
          <DialogTitle id={label.replace(/ /g, '')}>{title}</DialogTitle>
          <form>
            <DialogContent>
              <Typography gutterBottom>Prosim vnesi želeno vrednost:</Typography>
              <TextField
                label={label}
                value={this.state.value}
                onChange={this.handleChange}
                error={error}
                helperText={error && "Full width!"}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Prekliči
            </Button>
              <Button onClick={this.handleSubmit} color="primary" tabIndex="-1">
                Potrdi
            </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditPet: (id, updates) => dispatch(startEditPet(id, updates)),
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates))
});

export default connect(undefined, mapDispatchToProps)(EditTextProperty);
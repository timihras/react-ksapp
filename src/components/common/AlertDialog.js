import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log('Prekliči')
    this.setState({ open: false });
  };

  handleConfirm = () => {
    console.log('Potrdi')
    this.setState({ open: false });
    this.props.onDialogSubmit();
  }

  render() {
    const { buttonName, dialogText } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <Button onClick={this.handleClickOpen}>{buttonName}</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog"
        >
          <DialogTitle id="alert-dialog">{buttonName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {dialogText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Prekliči
            </Button>
            <Button onClick={this.handleConfirm} color="primary">
              Potrdi
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WeekendIcon from '@material-ui/icons/Weekend';
import HomeIcon from '@material-ui/icons/Home';

class WizardDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
          <AddCircleIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Vpis novega varovanca"}</DialogTitle>
          <DialogContent className="wizard-dialog">
            <Typography variant="subheading" align="center" gutterBottom className="wizard-dialog__header">
              Katero storitev želiš izbrati?
            </Typography>
            <div className="wizard-dialog__content">
              <Grid container spacing={24}>
                <Grid item xs={12} sm={4} className="wizard-dialog__choice">
                  <Link to="/new/dog-boarding">
                    <div className="wizard-dialog__icon-wrapper">
                      <WeekendIcon className="wizard-dialog__icon" />
                    </div>
                    <Typography
                      align="center"
                      gutterBottom
                      className="wizard-dialog__title"
                    >
                      Varstvo psov
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} className="wizard-dialog__choice">
                  <Link to="/new/dog-boarding">
                    <div className="wizard-dialog__icon-wrapper">
                      <FavoriteIcon className="wizard-dialog__icon" />
                    </div>
                    <Typography
                      align="center"
                      gutterBottom
                      className="wizard-dialog__title"
                    >
                      Varstvo mačk
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} className="wizard-dialog__choice">
                  <Link to="/new/dog-boarding">
                    <div className="wizard-dialog__icon-wrapper">
                      <HomeIcon className="wizard-dialog__icon" />
                    </div>
                    <Typography
                      align="center"
                      gutterBottom
                      className="wizard-dialog__title"
                    >
                      Oskrba živali
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Prekliči
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default WizardDialog;
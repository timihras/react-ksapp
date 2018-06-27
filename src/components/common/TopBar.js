import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { setTextFilter } from '../../actions/filters';
import WizardDialog from '../wizards/WizardDialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    background: 'white',
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class TopBar extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={this.props.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>

            <TextField
              id="search"
              type="search"
              placeholder="Iskanje po zapisih"
              className={classes.flex}
              margin="normal"
              required
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                disableUnderline: true,
              }}
              onChange={this.onTextChange}
            />

            <WizardDialog />

            <IconButton>
              <NotificationIcon />
            </IconButton>

            <IconButton>
              <AccountCircleIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(undefined, mapDispatchToProps)
)(TopBar);



import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  profile: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    minHeight: 350,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    margin: '0 auto',
    height: 100,
    width: 100,
    fontSize: '3rem',
  },
});

const CustomerInfoAvatar = (props) => {
  const { customer, classes, goBack } = props;

  return (
    <div className={classes.profile}>
      <div className={classes.toolbar}>
        <IconButton>
          <ArrowBackIcon onClick={goBack} />
        </IconButton>
        <div>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <Avatar className={classes.avatar}>
          {customer.firstName[0].toUpperCase()}{customer.lastName[0].toUpperCase()}
        </Avatar>
      </div>
      <div>
        <Button variant="outlined" color="primary" className={classes.button}>
          VIP
        </Button>
      </div>
    </div>
  );
}

CustomerInfoAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomerInfoAvatar);

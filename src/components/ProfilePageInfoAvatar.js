import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Checkbox } from '@material-ui/core';
import ProfilePageABC from './ProfilePageABC';

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

const ProfilePageInfoAvatar = (props) => {
  const { abc, classes, favorite, goBack, text } = props;

  return (
    <div className={classes.profile}>
      <div className={classes.toolbar}>
        <IconButton>
          <ArrowBackIcon onClick={goBack} />
        </IconButton>
        <div>
          <IconButton>
            <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} checked={favorite} />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <Avatar className={classes.avatar}>
          {text}
        </Avatar>
      </div>
      <div>
        <ProfilePageABC abc='C' />
      </div>
    </div>
  );
}

ProfilePageInfoAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfilePageInfoAvatar);


// <Button variant="outlined" color="primary" className={classes.button}>
// VIP
// </Button>
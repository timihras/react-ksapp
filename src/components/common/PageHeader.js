import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Divider, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem'
  },
  iconButton: {
    marginRight: theme.spacing.unit + 2,
  }
})

const ProfilePageHeader = (props) => {
  const { title, subtitle, goBack, classes } = props;
  return (
    <div>
      <div className={classes.header}>
        <div>
          <IconButton className={classes.iconButton}>
            <ArrowBackIcon onClick={goBack} />
          </IconButton>
        </div>
        <div>
          <Typography variant="headline">
            {title}
          </Typography>
          <Typography gutterBottom>
            {subtitle}
          </Typography>
        </div>
      </div>
      <Divider />
    </div>
  );
};

ProfilePageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfilePageHeader);





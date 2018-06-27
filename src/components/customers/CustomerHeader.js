import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '1rem'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

const CustomerHeader = (props) => {
  const { customer, classes } = props;
  return (
    <div>
      <div className={classes.header}>
        <div>
          <Typography variant="headline">
            {customer.firstName} {customer.lastName}
          </Typography>
          <Typography gutterBottom>
            {customer.email}
          </Typography>
        </div>
        <div>
          <Button component={Link} to={`/edit-customer/${customer.id}`} color="primary">
            <EditIcon className={classes.leftIcon} />
            Uredi
      </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

CustomerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerHeader);





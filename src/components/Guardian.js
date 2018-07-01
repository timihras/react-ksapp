import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    textAlign: 'left',
  },
  avatar: {
    backgroundColor: red[300],
    padding: '0.5rem'
  },
  list: {
    paddingLeft: '1rem',
  },
});

const Guardian = (props) => {
  const { classes, guardian } = props;
  if (guardian) {
    const fullName = `${guardian.firstName} ${guardian.lastName}`;
    const contact = guardian.phoneNumber + (guardian.email && ` ${guardian.email}`)
  }
  return (
    <div className={classes.root}>
      <Typography variant="subheading">
        Kontakt v sili:
      </Typography>
      <List>
        {
          guardian ? (
            <ListItem key={guardian.phoneNumber}>
              <Avatar className={classes.avatar}><PriorityHighIcon /></Avatar>
              <ListItemText primary={contact} secondary={fullName} />
            </ListItem>
          ) : (
              <ListItem>
                <ListItemText primary={'Ni povezanega kontakta v sili'} />
              </ListItem>
            )
        }
      </List>
    </div>
  );
}

Guardian.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Guardian);
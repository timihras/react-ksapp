import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    backgroundColor: red[300],
    padding: '0.5rem'
  },
  list: {
    paddingLeft: '1rem',
  },
});

function FolderList(props) {
  const { classes, pets } = props;
  return (
    <div className={classes.root}>
      <Typography variant="subheading">
        Povezani hišni ljubljenčki
      </Typography>
      <List>
        {
          pets.length === 0 ? (
            <ListItem>
              <ListItemText primary={'Ni povezanega hišnega ljubljenčka'} />
            </ListItem>
          ) : (
              pets.map(pet => (
                <ListItem key={pet.id}>
                  <Avatar src={`/images/svg/${pet.type}.svg`} className={classes.avatar} />
                  <Link to={`/pets/${pet.id}`} className={classes.list}><ListItemText primary={pet.name} secondary={pet.breed} /></Link>
                </ListItem>
              )))
        }
      </List>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
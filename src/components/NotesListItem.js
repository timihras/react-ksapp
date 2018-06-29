import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export const CustomerNotesListItem = (props) => (
  <ListItem divider={!props.last}>
    <Grid container spacing={16} className="notes">
      <Grid item xs={2}>
        <Typography variant="body2">
          {props.author}
        </Typography>
        <Typography variant="caption">
          {moment(props.created).format('DD. MM. YYYY')}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography>{props.text}</Typography>
      </Grid>
      <Grid item xs={1} className="notes__delete">
        <IconButton aria-label="Delete" color="primary" className="notes__action">
          <DeleteIcon onClick={() => props.onDelete(props.created)} />
        </IconButton>
      </Grid>
    </Grid>
  </ListItem>
);

export default CustomerNotesListItem;
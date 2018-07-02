import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import replaceValues from '../../utils/replaceValues';

const styles = {
  card: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginBottom: 4,
    fontSize: 12,
  },
  properties: {
    textAlign: 'center',
  },
};

const PetsDetailsCards = (props) => {
  const { details = {}, classes } = props;
  const behavior = !details.habits && !details.likes ? noData : `${details.habits} ${details.likes}`;
  const noData = <i>Ni podatka</i>;
  return (
    <div>
      {
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Navodila hranjenja:
                  </Typography>
                <Typography component="p">
                  {details.feeding ? details.feeding : noData}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Navodila sprehajanja:
                  </Typography>
                <Typography component="p">
                  {details.walking ? details.walking : noData}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Zdravstvene opombe:
                  </Typography>
                <Typography component="p">
                  {details.health ? details.health : noData}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Vedenjske opombe:
                  </Typography>
                <Typography component="p">
                  {behavior && behavior.trim() ? behavior.trim() : noData}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={16}>
                  <Grid item xs={6} sm={2} className={classes.properties}>
                    <Typography className={classes.title} color="textSecondary">Je kastriran:</Typography>
                    <Typography component="p"> {details.isNutered ? replaceValues(details.isNutered) : noData}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={2} className={classes.properties}>
                    <Typography className={classes.title} color="textSecondary">Iz zavetišča:</Typography>
                    <Typography component="p"> {details.fromKennel ? replaceValues(details.fromKennel) : noData}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={2} className={classes.properties}>
                    <Typography className={classes.title} color="textSecondary">Je igriv:</Typography>
                    <Typography component="p"> {details.isPlayful ? replaceValues(details.isPlayful) : noData}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={2} className={classes.properties}>
                    <Typography className={classes.title} color="textSecondary">Je že ugriznil:</Typography>
                    <Typography component="p"> {details.hasBitten ? replaceValues(details.hasBitten) : noData}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={2} className={classes.properties}>
                    <Typography className={classes.title} color="textSecondary">Agresija pri hrani:</Typography>
                    <Typography component="p"> {details.aggressiveAroundFood ? replaceValues(details.aggressiveAroundFood) : noData}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={2} className={classes.properties}>
                    <Typography className={classes.title} color="textSecondary">Agresija pri igri:</Typography>
                    <Typography component="p"> {details.aggressiveAroundToys ? replaceValues(details.aggressiveAroundToys) : noData}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    </div>
  );
}

PetsDetailsCards.propTypes = ({
  classes: PropTypes.object.isRequired,
})

export default withStyles(styles)(PetsDetailsCards);
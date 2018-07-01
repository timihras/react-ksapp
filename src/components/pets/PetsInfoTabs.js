import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PetsInfoTable from './PetsInfoTable';
import Guardian from '../Guardian';
import { Grid } from '@material-ui/core';
import PetsDetailsCards from './PetsDetailsCards';

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
};

class PetsInfoTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, pet } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Informacije" />
          <Tab label="Podrobnosti" />
          <Tab label="Drugo" disabled />
        </Tabs>
        {value === 0 &&
          <TabContainer>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}>
                <PetsInfoTable pet={pet} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Guardian guardian={pet.guardian} />
              </Grid>
            </Grid>
          </TabContainer>
        }
        {value === 1 &&
          <TabContainer>
            <PetsDetailsCards details={pet.data} />
          </TabContainer>
        }
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

PetsInfoTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetsInfoTabs);
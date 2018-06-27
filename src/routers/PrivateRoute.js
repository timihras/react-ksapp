import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Route, Redirect } from 'react-router-dom';
import SideNav from '../components/common/MainNav';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, isAuthenticated, component: Component, ...rest } = this.props;
    return (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div className={classes.root}>
            <SideNav />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Component {...props} />
            </main>
          </div>
        ) : (
            <Redirect to="/" />
          )
      )} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

PrivateRoute.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(PrivateRoute);



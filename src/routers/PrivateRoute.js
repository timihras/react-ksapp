import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Aside from '../components/Aside';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenav: false
    }
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        sidenav: window.innerWidth > 1200
      });
    }, false);
  }
  toggleSidenav = () => {
    this.setState((prevState) => ({
      sidenav: !prevState.sidenav
    }));
  }
  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props;
    return (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div className={this.state.sidenav ? 'sidenav--open' : ''}>
            <Aside toggleSidenav={this.toggleSidenav} />
            <main>
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


export default connect(mapStateToProps)(PrivateRoute);
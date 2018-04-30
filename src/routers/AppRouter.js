import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Pages
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';

import CustomersDashboardPage from '../components/customers/CustomersDashboardPage';
import CustomerAddPage from '../components/customers/CustomerAddPage';
import CustomerEditPage from '../components/customers/CustomerEditPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/customers" component={CustomersDashboardPage} />
        <PrivateRoute path="/customer/add" component={CustomerAddPage} />
        <PrivateRoute path="/customer/:id" component={CustomerEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
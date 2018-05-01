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

import PetsDashboardPage from '../components/pets/PetsDashboardPage';
import PetEditPage from '../components/pets/PetEditPage';
import PetAddPage from '../components/pets/PetAddPage';

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
        <PrivateRoute path="/pets" component={PetsDashboardPage} />
        <PrivateRoute path="/pet/add" component={PetAddPage} />
        <PrivateRoute path="/pet/:id" component={PetEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
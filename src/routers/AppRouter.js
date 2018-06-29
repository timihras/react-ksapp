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
import CustomerProfilePage from '../components/customers/CustomerProfilePage';
import CustomerAddPage from '../components/customers/CustomerAddPage';
import CustomerEditPage from '../components/customers/CustomerEditPage';

import PetsDashboardPage from '../components/pets/PetsDashboardPage';
import PetEditPage from '../components/pets/PetEditPage';
import PetAddPage from '../components/pets/PetAddPage';
import PetProfilePage from '../components/pets/PetProfilePage';

import WizardMasterPage from '../components/wizards/WizardMasterPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />

        <PrivateRoute path="/dashboard" component={DashboardPage} />

        <PrivateRoute path="/customers/add" component={CustomerAddPage} />
        <PrivateRoute path="/customers/:id" component={CustomerProfilePage} />
        <PrivateRoute path="/customers" component={CustomersDashboardPage} />
        <PrivateRoute path="/edit-customer/:id" component={CustomerEditPage} />

        <PrivateRoute path="/pets/add" component={PetAddPage} />
        <PrivateRoute path="/pets/:id" component={PetProfilePage} />
        <PrivateRoute path="/pets" component={PetsDashboardPage} />
        <PrivateRoute path="/edit-pet/:id" component={PetEditPage} />

        <PrivateRoute path="/new/dog-boarding" component={WizardMasterPage} />
        <PrivateRoute path="/new/cat-boarding" component={WizardMasterPage} />
        <PrivateRoute path="/new/cat-visits" component={WizardMasterPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
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
import CustomerNotesAdd from '../components/customers/CustomerNotesAdd';

import PetsDashboardPage from '../components/pets/PetsDashboardPage';
import PetEditPage from '../components/pets/PetEditPage';
import PetAddPage from '../components/pets/PetAddPage';
import PetProfilePage from '../components/pets/PetProfilePage';
import PetNotesAdd from '../components/pets/PetNotesAdd';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />

        <PrivateRoute path="/customers" component={CustomersDashboardPage} />
        <PrivateRoute path="/customer/add" component={CustomerAddPage} />
        <PrivateRoute path="/customer/note-add" component={CustomerNotesAdd} />
        <PrivateRoute path="/customer/:id" component={CustomerProfilePage} />
        <PrivateRoute path="/edit-customer/:id" component={CustomerEditPage} />

        <PrivateRoute path="/pets" component={PetsDashboardPage} />
        <PrivateRoute path="/pet/add" component={PetAddPage} />
        <PrivateRoute path="/pet/note-add" component={PetNotesAdd} />
        <PrivateRoute path="/pet/:id" component={PetProfilePage} />
        <PrivateRoute path="/edit-pet/:id" component={PetEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
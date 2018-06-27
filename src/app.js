import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter'

import 'normalize.css/normalize.css';
import './styles/style.scss';
// import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import SubscriberPage from './components/SubscriberPage';

import configureStore from './store/configureStore';
import { login, logout, setUser } from "./actions/auth";
import { startSetCustomers } from './actions/customers';
import { startSetPets } from './actions/pets';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(setUser(user.uid)).then((data) => {
      if (data.roles.admin) {
        renderApp();
        if (history.location.pathname === '/') {
          history.push('dashboard');
        }
        store.dispatch(startSetCustomers());
        store.dispatch(startSetPets());
      } else {
        ReactDOM.render(<Provider store={store}><SubscriberPage /></Provider>, document.getElementById('app'));
      }
    });

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
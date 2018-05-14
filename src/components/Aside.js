import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import NewItemModal from './newItem/NewItemModal';

export const Aside = ({ auth, startLogout }) => (

  <aside>
    <img src="/images/logo.png" className="aside__logo" />
    <img src={auth.photoUrl} className="aside__avatar" />
    <div className="aside__username">
      {auth.displayName}
    </div>
    <nav className="aside__nav">

      <NewItemModal />

      <NavLink to="/pets" activeClassName='nav-active'>
        <i className="far fa-heart"></i> Varovanci
        </NavLink>
      <NavLink to="/customers" activeClassName='nav-active'>
        <i className="far fa-user"></i> Stranke
        </NavLink>
      <NavLink to="/calendar" activeClassName='nav-active'>
        <i className="far fa-calendar-alt"></i> Koledar obiskov
        </NavLink>
      <NavLink to="/profile" activeClassName='nav-active'>
        <i className="far fa-user-circle"></i> Moj račun
        </NavLink>
      <button className="button button__nav button__nav--link" onClick={startLogout}>
        <i className="fas fa-sign-out-alt"></i> Odjavi
        </button>
    </nav>
  </aside>

);

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
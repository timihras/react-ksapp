import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Aside = ({ auth, startLogout }) => (
  // <header className="header">
  //   <div className="content-container">
  //     <div className="header__content">
  //       <Link className="header__title" to="/dashboard">
  //         <h1>Kosmata Sreča</h1>
  //       </Link>
  //       <div>
  //         <Link className="button button--link" to="/customers">Stranke</Link>
  //         <Link className="button button--link" to="/pets">Varovanci</Link>
  //         <button className="button button--link" onClick={startLogout}>Odjavi</button>
  //       </div>
  //     </div>
  //   </div>
  // </header>

  <aside>
    <img src="/images/logo.png" className="aside__logo" />
    <img src={auth.photoUrl} className="aside__avatar" />
    <div className="aside__username">
      {auth.displayName}
    </div>
    <nav className="aside__nav">
      <NavLink to="/pets" activeClassName='nav-active'>
        <i className="far fa-heart"></i> Varovanci
      </NavLink>
      <NavLink to="/customers" activeClassName='nav-active'>
        <i className="far fa-user"></i> Stranke
        </NavLink>
      <a className="button button--link" onClick={startLogout}>Odjavi</a>
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
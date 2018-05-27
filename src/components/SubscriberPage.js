import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const SubscriberPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Kosmata Sreča</h1>
      <p>Dobrodošel v naših novicah..</p>
      <button className="button" onClick={props.startLogout}>Odjava</button>
    </div>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(SubscriberPage);
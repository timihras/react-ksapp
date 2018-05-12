import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CustomerNotesList from './CustomerNotesList';

class CustomerProfilePage extends React.Component {
  render() {
    const customer = this.props.customer || {};
    const ownPets = this.props.ownPets || [];
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">{customer.firstName} {customer.lastName}</h1>
            <div className="page-header__actions">
              <Link className="button" to="/customers">Nazaj</Link>
              <Link className="button button--secondary" to={`/edit-customer/${customer.id}`}>Uredi</Link>
            </div>
          </div>
        </div>
        <div className="content-container profile">
          <div className="profile-data">
            <h2>Podatki osebe</h2>
            <div>
              <p>Ime in priimek: <br /><span>{customer.firstName} {customer.lastName}</span></p>
              <p>Naslov: <br /><span>{customer.address} <br />{customer.post} {customer.city}</span></p>
              <p>Kontakti: <br /><span>{customer.phoneNumber} <br />{customer.email}</span></p>
            </div>
          </div>
          <div className="profile-details">
            <CustomerNotesList customer={customer} />
            <div className="pets">
              <h2>Lastnik:</h2>
              {ownPets.length === 0 ? (
                <p>Ni povezanih ljubljenčkov</p>
              ) : (
                  ownPets.map((pet) => <div key={pet.id}><Link to={`/pet/${pet.id}`}>{pet.name}</Link></div>)
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  customer: state.customers.find(({ id }) => id === props.match.params.id),
  ownPets: state.pets.filter((pet) => pet.owner === props.match.params.id)
});

export default connect(mapStateToProps)(CustomerProfilePage);

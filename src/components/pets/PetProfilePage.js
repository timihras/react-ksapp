import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PetProfilePage extends React.Component {

  render() {
    const pet = this.props.pet || {};
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">{pet.name}</h1>
            <div className="page-header__actions">
              <Link className="button" to="/pets">Nazaj</Link>
              <Link className="button button--secondary" to={`/edit-pet/${pet.id}`}>Uredi</Link>
            </div>
          </div>
        </div>
        <div className="content-container profile">
          <div className="profile-data">
            <h2>Podatki osebe</h2>
            <div>
              <p>Ime: <br /><span>{pet.name}</span></p>
              <p>Pasma: <br /><span>{pet.breed}</span></p>
              <p>Vrsta: <br /><span>{pet.type}</span></p>
              <p>Leto rojstva: <br /><span>{pet.birth}</span></p>
            </div>
          </div>
          <div className="profile-details">
            <h2>Lastnik</h2>
            <Link to={`/customer/${pet.owner}`}>Povezava</Link>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  pet: state.pets.find(({ id }) => id === props.match.params.id)
});

export default connect(mapStateToProps)(PetProfilePage);

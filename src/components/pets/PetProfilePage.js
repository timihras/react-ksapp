import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import petSelector from '../../selectors/petDetails';
import ownerSelector from '../../selectors/owners';

export class PetProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      id: '',
      editOwner: false
    };
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.owners.filter(owner =>
      owner.fullName.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue = suggestion => suggestion.fullName;

  renderSuggestion = suggestion => (
    <div>
      {suggestion.fullName}
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState(() => ({
      value: newValue
    }));
  };


  onSuggestionSelected = (event, { suggestion }) => {
    this.setState(() => ({
      id: suggestion.id
    }))
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState(() => ({
      suggestions: this.getSuggestions(value)
    }));
  };

  onSuggestionsClearRequested = () => {
    this.setState(() => {
      suggestions: []
    });
  };

  onEditOwner = () => {
    this.setState(() => ({
      editOwner: true
    }))
  }

  onSaveOwner = () => {
    this.setState(() => ({
      editOwner: false
    }))
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Iskanje lastnikov',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        {this.props.pet ? (
          <div>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">{this.props.pet.name}</h1>
                <div className="page-header__actions">
                  <Link className="button" to="/pets">Nazaj</Link>
                  <Link className="button button--secondary" to={`/edit-pet/${this.props.pet.id}`}>Uredi</Link>
                </div>
              </div>
            </div>
            <div className="content-container profile">
              <div className="profile-data">
                <h2>Podatki osebe</h2>
                <div>
                  <p>Ime: <br /><span>{this.props.pet.name}</span></p>
                  <p>Pasma: <br /><span>{this.props.pet.breed}</span></p>
                  <p>Vrsta: <br /><span>{this.props.pet.type}</span></p>
                  <p>Leto rojstva: <br /><span>{this.props.pet.birth}</span></p>
                </div>
              </div>
              <div className="profile-details">
                <h2>Lastnik</h2>

                {this.props.pet.ownerFullName && !this.state.editOwner ? (
                  <div>
                    <Link to={`/customer/${this.props.pet.owner}`}>{this.props.pet.ownerFullName}</Link>
                    <button onClick={this.onEditOwner}>Spremeni</button>
                  </div>
                ) : (
                    <div>
                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        onSuggestionSelected={this.onSuggestionSelected}
                        highlightFirstSuggestion={true}
                        inputProps={inputProps}
                      />
                      {
                        this.state.value ?
                          <button
                            className="button"
                            onClick={this.onSaveOwner}
                          >
                            Shrani
                            </button>
                          :
                          undefined
                      }
                    </div>
                  )}

              </div>
            </div>
          </div>
        ) : (
            <div>Nalagam...</div>
          )}
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  pet: petSelector(state.pets, state.customers, props.match.params.id),
  owners: ownerSelector(state.customers)
});

export default connect(mapStateToProps)(PetProfilePage);

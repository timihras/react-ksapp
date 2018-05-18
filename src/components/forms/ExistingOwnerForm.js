import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import ownerSelector from '../../selectors/owners';

class PetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      value: '',
      suggestions: [],
    }
  }

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

  onSuggestionSelected = (event, { suggestion }) => {
    this.setState(() => ({
      owner: suggestion.id
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

  onSuggestionChange = (event, { newValue }) => {
    this.setState(() => ({
      value: newValue
    }));
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Iskanje lastnikov',
      value,
      onChange: this.onSuggestionChange,
    };
    return (
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
    )
  }
}

const mapStateToProps = (state) => ({
  owners: ownerSelector(state.customers)
});

export default connect(mapStateToProps)(PetForm);
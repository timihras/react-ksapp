import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters';

export class CustomerListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          placeholder="Iskanje po zapisih"
          onChange={this.onTextChange}
        />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(undefined, mapDispatchToProps)(CustomerListFilters);
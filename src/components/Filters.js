import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class CustomerListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  componentWillMount() {
    this.props.setTextFilter();
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              name="search"
              placeholder="Iskanje po zapisih"
              onChange={this.onTextChange}
            />
          </div>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(undefined, mapDispatchToProps)(CustomerListFilters);
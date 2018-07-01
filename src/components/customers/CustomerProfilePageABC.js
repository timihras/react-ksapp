import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { startEditCustomer } from '../../actions/customers';

class ProfilePageABC extends React.Component {
  state = {
    anchorEl: null,
    abc: this.props.abc
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (abc) => {
    const { id } = this.props;
    if (abc) {
      this.setState({ abc })
      this.props.startEditCustomer(id, { abc })
    }
    this.setState({ anchorEl: null });
  };

  renderButtonName = (abc) => {
    switch (abc) {
      case 'A':
        return 'Vip stranka'
      case 'B':
        return 'Pomembna stranka'
      default:
        return 'Običajna stranka'
    }
  }

  render() {
    const { anchorEl, abc } = this.state;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.renderButtonName(abc)}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleClose('C')}>OBIČAJNA STRANKA</MenuItem>
          <MenuItem onClick={() => this.handleClose('B')}>POMEMBNA STRANKA</MenuItem>
          <MenuItem onClick={() => this.handleClose('A')}>VIP STRANKA</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditCustomer: (id, updates) => dispatch(startEditCustomer(id, updates))
})

export default connect(undefined, mapDispatchToProps)(ProfilePageABC);
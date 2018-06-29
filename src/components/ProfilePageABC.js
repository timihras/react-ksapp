import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class ProfilePageABC extends React.Component {
  state = {
    anchorEl: null,
    value: this.props.abc
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (value) => {
    if (value) {
      this.setState({ value })
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
    const { anchorEl, value } = this.state;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.renderButtonName(value)}
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

export default ProfilePageABC;
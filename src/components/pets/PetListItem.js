import React from 'react'
import { Link } from 'react-router-dom'

class PetListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  };

  onMenuOpen = () => {
    this.setState(() => ({ showMenu: true }), () => {
      document.addEventListener('click', this.onMenuClose);
    })
  };

  onMenuClose = () => {
    this.setState(() => ({ showMenu: false }), () => {
      document.removeEventListener('click', this.onMenuClose);
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onMenuClose);
  }

  render() {
    return (
      <div className="table__row">
        <Link to={`/pet/${this.props.id}`} className="table__cell table__cell--info">
          <div className="list__icon"><i className="fas fa-bug"></i></div>
          <div>{this.props.name}</div>
        </Link>
        <div className="table__cell">{this.props.breed}</div>
        <div className="table__cell">{this.props.birth}</div>
        <div className="table__cell table__cell--small">
          <i className="fa fa-ellipsis-h link" onClick={this.onMenuOpen}></i>
          {
            this.state.showMenu ? (
              <div className="menu">
                <Link to={`/pet/${this.props.id}`} className="menu__item"><i className="fas fa-info"></i> Več</Link>
                <Link to={`/edit-pet/${this.props.id}`} className="menu__item"><i className="fas fa-edit"></i> Uredi</Link>
                <Link to={`/pet/${this.props.id}`} className="menu__item"><i className="fas fa-trash"></i> Izbriši</Link>
              </div>
            ) : (
                null
              )
          }
        </div>

      </div>
    );

  };
};

export default PetListItem;
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

class WizardModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  };
  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };
  render() {
    return (

      <div>
        <button className="button button__primary" onClick={this.handleOpenModal}>
          <i className="fas fa-plus"></i> Dodaj
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Kateri obrazec želiš izbrati?"
          // onRequestClose={this.handleCloseModal}
          closeTimeoutMS={200}
          className="modal"
        >
          <h3 className="modal__title">Kateri obrazec želiš izbrati?</h3>
          <div className="modal__body">
            <Link to='/new/dog-boarding' className="modal__item">
              <div className="modal__icon"><i className="fas fa-bug"></i></div>
              <div className="modal__subtitle">Varstvo psa</div>
            </Link>
            <Link to='/new/cat-boarding' className="modal__item">
              <div className="modal__icon"><i className="fas fa-bug"></i></div>
              <div className="modal__subtitle">Varstvo muce</div>
            </Link>
            <Link to='/new/cat-visits' className="modal__item">
              <div className="modal__icon"><i className="fas fa-bug"></i></div>
              <div className="modal__subtitle">Oskrba na domu</div>
            </Link>
          </div>
          <button className="button" onClick={this.handleCloseModal}>Prekliči</button>
        </Modal>
      </div>

    );
  };
};

export default WizardModal;
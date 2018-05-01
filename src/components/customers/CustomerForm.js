import React from 'react';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.customer ? props.customer.firstName : '',
      lastName: props.customer ? props.customer.lastName : '',
      address: props.customer ? props.customer.address : '',
      post: props.customer ? props.customer.post : '',
      city: props.customer ? props.customer.city : '',
      phoneNumber: props.customer ? props.customer.phoneNumber : '',
      email: props.customer ? props.customer.email : '',
      edit: props.customer ? true : false,
      error: undefined
    }
  };
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  onPostChange = (e) => {
    const post = e.target.value;
    this.setState(() => ({ post }));
  };
  onCityChange = (e) => {
    const city = e.target.value;
    this.setState(() => ({ city }));
  };
  onPhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    this.setState(() => ({ phoneNumber }));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.lastName || !this.state.firstName) {
      this.setState(() => ({
        error: 'Prosim vpiši ime in priimek osebe'
      }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        post: this.state.post,
        city: this.state.city,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="text-input"
          placeholder="Ime"
          value={this.state.firstName}
          onChange={this.onFirstNameChange}
          autoFocus
        />
        <input
          type="text"
          className="text-input"
          placeholder="Priimek"
          value={this.state.lastName}
          onChange={this.onLastNameChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Naslov"
          value={this.state.address}
          onChange={this.onAddressChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Pošta"
          value={this.state.post}
          onChange={this.onPostChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Mesto"
          value={this.state.city}
          onChange={this.onCityChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Telefonska št."
          value={this.state.phoneNumber}
          onChange={this.onPhoneNumberChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <div>
          <button type="submit" className="button">{this.state.edit ? "Uredi" : "Dodaj"}</button>
        </div>

        {this.state.error && <p className="form__error">{this.state.error}</p>}
      </form>
    );
  };
};

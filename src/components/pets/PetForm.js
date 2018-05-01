import React, { Component } from 'react'

export default class PetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: this.props.pet ? this.props.pet.birth : (new Date).getFullYear(),
      breed: this.props.pet ? this.props.pet.breed : '',
      name: this.props.pet ? this.props.pet.name : '',
      owner: this.props.pet ? this.props.pet.owner : '',
      type: this.props.pet ? this.props.pet.type : 'dog',
      edit: this.props.pet ? true : false,
      error: undefined
    }
  }

  onBirthChange = (e) => {
    const birth = e.target.value;
    this.setState(() => ({ birth }));
  }
  onBreedChange = (e) => {
    const breed = e.target.value;
    this.setState(() => ({ breed }));
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }
  onOwnerChange = (e) => {
    const owner = e.target.value;
    this.setState(() => ({ owner }));
  }
  onTypeChange = (e) => {
    const type = e.target.value;
    this.setState(() => ({ type }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Prosim vpiši ime živali.' }));
    } else if (!this.state.owner) {
      this.setState(() => ({ error: 'Prosim vpiši lastnika živali' }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        birth: this.state.birth,
        breed: this.state.breed,
        name: this.state.name,
        owner: this.state.owner,
        type: this.state.type
      });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <select
          className="select"
          value={this.state.type}
          onChange={this.onTypeChange}
        >
          <option value="dog">Pes</option>
          <option value="cat">Mačka</option>
          <option value="other">Drugo</option>
        </select>
        <input
          type="text"
          className="text-input"
          placeholder="Ime"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Pasma"
          value={this.state.breed}
          onChange={this.onBreedChange}
        />
        <input
          type="number"
          className="text-input"
          placeholder="Leto rojstva"
          value={this.state.birth}
          onChange={this.onBirthChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Lastnik"
          value={this.state.owner}
          onChange={this.onOwnerChange}
        />
        <div>
          <button className="button" type="submit">{this.state.edit ? 'Uredi' : 'Dodaj'}</button>
        </div>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    )
  }
}

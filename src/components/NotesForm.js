import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class NotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      created: moment(),
      author: 'Timi Hraš',
      error: undefined
    };
  };
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.text) {
      this.setState(() => ({ error: 'Prosim vpiši vsebino opombe' }));
    } else {
      this.setState(() => ({ error: undefined, created: moment() }));
      this.props.onSubmit({
        text: this.state.text,
        created: this.state.created.valueOf(),
        author: this.state.author
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <textarea
          className="textarea"
          value={this.state.text}
          onChange={this.onTextChange}
          autoFocus
        />
        <button className="button">Dodaj</button>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
      </form>
    );
  };
};

export default NotesForm;
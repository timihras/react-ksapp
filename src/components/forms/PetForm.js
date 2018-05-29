import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';

const gender = ['male', 'female', 'n/a'];
const type = ['dog', 'cat', 'other'];

const renderGenderSelector = ({ input, meta: { touched, error } }) => (
  <div className="wizard__form-field">
    <label>Spol</label>
    <select {...input} className="select">
      <option value="">Izberi spol ljubljenčka...</option>
      {gender.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <div className="form__error">{error}</div>}
  </div>
);

const renderTypeSelector = ({ input, meta: { touched, error } }) => (
  <div className="wizard__form-field">
    <label>Vrsta</label>
    <select {...input} className="select">
      <option value="">Izberi tip ljubljenčka...</option>
      {type.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <div className="form__error">{error}</div>}
  </div>
);

const PetForm = (props) => {
  const { handleSubmit, prevPage } = props;
  return (
    <form className="wizard__form" onSubmit={handleSubmit}>
      <h1 className="wizard__title">Potrebujemo tudi nekaj informacij o ljubljenčku..</h1>
      <div>
        <Field
          name="p.name"
          type="text"
          component={renderField}
          label="Ime"
          autoFocus={true}
        />
      </div>
      <div>
        <Field
          name="p.type"
          component={renderTypeSelector}
        />
        <Field
          name="p.gender"
          component={renderGenderSelector}
        />
      </div>
      <div>
        <Field
          name="p.birth"
          type="text"
          component={renderField}
          label="Letnik"
        />
        <Field
          name="p.breed"
          type="text"
          component={renderField}
          label="Pasma"
        />
      </div>
      <div className="wizard__actions">
        <button type="button" className="button link" onClick={prevPage}>
          <i className="fas fa-angle-left"></i> Nazaj
      </button>

        <button type="submit" className="button link">
          <i className="fas fa-angle-right"></i> Naprej
      </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'dog-boarding',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(PetForm)
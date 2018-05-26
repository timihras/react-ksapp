import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const CustomerForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="wizard__form" onSubmit={handleSubmit}>
      <Field
        name="c.firstName"
        type="text"
        component={renderField}
        label="Ime"
        autoFocus={true}
      />
      <Field
        name="c.lastName"
        type="text"
        component={renderField}
        label="Priimek"
      />
      <Field
        name="c.address"
        type="text"
        component={renderField}
        label="Naslov"
      />
      <Field
        name="c.post"
        type="text"
        component={renderField}
        label="Pošta"
      />
      <Field
        name="c.city"
        type="text"
        component={renderField}
        label="Mesto"
      />
      <Field
        name="c.phoneNumber"
        type="text"
        component={renderField}
        label="Telefonska številka"
      />
      <Field
        name="c.email"
        type="text"
        component={renderField}
        label="Email"
      />
      <button
        type="submit"
        className="button link">
        <i className="fas fa-angle-right"></i> Naprej
        </button>
    </form>
  )
}

export default reduxForm({
  form: 'dog-boarding',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(CustomerForm);

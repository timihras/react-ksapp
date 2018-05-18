import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const GuardianForm = (props) => {
  const { handleSubmit, prevPage } = props;
  return (
    <form className="wizard__form" onSubmit={handleSubmit}>

      <Field
        name='g.firstName'
        type='text'
        component={renderField}
        label="Ime"
      />
      <Field
        name='g.lastName'
        type='text'
        component={renderField}
        label="Priimek"
      />
      <Field
        name='g.phoneNumber'
        type='text'
        component={renderField}
        label="Telefonska številka"
      />
      <Field
        name='g.email'
        type='text'
        component={renderField}
        label="Enail"
      />

      <div className="wizard__actions">
        <button
          type="button"
          className="button link"
          onClick={prevPage}
        >
          <i className="fas fa-angle-left"></i> Nazaj
            </button>
        <button
          type="submit"
          className="button link"
        >
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
})(GuardianForm);
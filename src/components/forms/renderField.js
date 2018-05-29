import React from 'react';

const renderField = ({ input, label, type, autoFocus, meta: { touched, error } }) => (
  <div className="wizard__form-field">
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="text-input"
        autoFocus={autoFocus}
      />
    </div>
    {touched && error && <div className="form__error">{error}</div>}
  </div>
);

export default renderField;

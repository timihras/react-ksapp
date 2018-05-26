import React from 'react';

const renderField = ({ input, label, type, autoFocus, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="text-input"
      autoFocus={autoFocus}
    />
    {touched && error && <span>{error}</span>}
  </div>
);

export default renderField;

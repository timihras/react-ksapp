import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="text-input"
    />
    {touched && error && <span>{error}</span>}
  </div>
);

export default renderField;

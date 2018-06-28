import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    label={label}
    margin="normal"
    className="wizard__text-field"
    error={!!touched && !!error}
    helperText={error}
    {...input}
    {...custom}
  />
);

// const renderField = ({ input, label, type, autoFocus, meta: { touched, error } }) => (
//   <div className="wizard__form-field">
//     <label>{label}</label>
//     <div>
//       <input
//         {...input}
//         placeholder={label}
//         type={type}
//         className="text-input"
//         autoFocus={autoFocus}
//       />
//     </div>
//     {touched && error && <div className="form__error">{error}</div>}
//   </div>
// );

export default renderField;

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

export default renderField;

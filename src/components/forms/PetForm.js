import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';
import Grid from '@material-ui/core/Grid';
import { InputLabel, Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';

const gender = [{ value: 'male', text: 'Samec' }, { value: 'female', text: 'Samica' }];
const type = [{ value: 'dog', text: 'Pes' }, { value: 'cat', text: 'Mačka' }, { value: 'other', text: 'Ostalo' }];

const renderGenderSelector = ({ input, meta: { touched, error }, ...custom }) => (
  <FormControl className="wizard__select" error={!!touched && !!error}>
    <InputLabel htmlFor="animal-gender">Spol</InputLabel>
    <Select
      {...input}
      inputProps={{
        id: 'animal-gender',
      }}
      {...custom}
    >
      <MenuItem value=""><em>Spol</em></MenuItem>
      {gender.map(val => <MenuItem key={val.value} value={val.value}>{val.text}</MenuItem>)}
    </Select>
    {!!touched && !!error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

const renderTypeSelector = ({ input, meta: { touched, error }, ...custom }) => (
  <FormControl className="wizard__select" error={!!touched && !!error}>
    <InputLabel htmlFor="animal-type">Vrsta</InputLabel>
    <Select
      {...input}
      inputProps={{
        id: 'animal-type',
      }}
      {...custom}
    >
      <MenuItem value=""><em>Vrsta</em></MenuItem>
      {type.map(val => <MenuItem key={val.value} value={val.value}>{val.text}</MenuItem>)}
    </Select>
    {!!touched && !!error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

class PetForm extends React.Component {

  componentDidMount() {
    const { p } = this.props;
    if (p) {
      this.props.initialize({ p });
    } else {
      this.props.initialize({ p: {} });
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Field
              name="p.name"
              component={renderField}
              label="Ime"
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="p.type"
              component={renderTypeSelector}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="p.gender"
              component={renderGenderSelector}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="p.birth"
              component={renderField}
              label="Letnik"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="p.breed"
              component={renderField}
              label="Pasma"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default reduxForm({
  form: 'boardingForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PetForm)
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';
import Typography from '@material-ui/core/Typography';
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

const PetForm = (props) => {
  const { handleSubmit, prevPage } = props;
  return (
    <form className="wizard__form" onSubmit={handleSubmit}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography>Potrebujemo tudi nekaj informacij o ljubljenčku..</Typography>
        </Grid>
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

    </form>
  )
}

export default reduxForm({
  form: 'dog-boarding',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(PetForm)
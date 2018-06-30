import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import validate from './validate';
import renderField from './renderField';

const CustomerForm = (props) => {
  return (
    <form>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography>Zdravo! Prosim vpiši nekaj podatkov o lastniku</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="c.firstName"
            component={renderField}
            label="Ime"
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="c.lastName"
            component={renderField}
            label="Priimek"
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="c.address"
            component={renderField}
            label="Naslov"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="c.post"
            component={renderField}
            label="Pošta"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="c.city"
            component={renderField}
            label="Mesto"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="c.phoneNumber"
            component={renderField}
            label="Telefonska številka"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="c.email"
            component={renderField}
            label="Email"
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default reduxForm({
  form: 'boardingForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(CustomerForm);

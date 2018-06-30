import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const GuardianForm = (props) => {
  return (
    <form>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography>Koga lahko kontaktiramo v nujnih primerih?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name='g.firstName'
            component={renderField}
            label="Ime"
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name='g.lastName'
            component={renderField}
            label="Priimek"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name='g.phoneNumber'
            component={renderField}
            label="Telefonska številka"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name='g.email'
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
})(GuardianForm);
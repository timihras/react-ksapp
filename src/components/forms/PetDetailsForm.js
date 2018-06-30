import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    className="wizard__radio"
  >
    <FormControlLabel value="Yes" control={<Radio />} label="Da" />
    <FormControlLabel value="No" control={<Radio />} label="Ne" />
    <FormControlLabel value="Maybe" control={<Radio />} label="Ne vem" />
  </RadioGroup>
);

const PetDetailsForm = (props) => {
  return (
    <form>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography>Pa še nekaj podrobnejših informacij..</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="d.feeding"
            component={renderField}
            multiline={true}
            rows={2}
            label="Navade hranjenja (vrsta hrane, količina in čas obrokov)"
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="d.walking"
            component={renderField}
            multiline={true}
            rows={2}
            label="Navade sprehajanja (čas in dolžina sprehodov)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="d.health"
            component={renderField}
            multiline={true}
            rows={2}
            label="Zdravstvene težave psa (alergije, poškodbe, ...)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="d.habits"
            component={renderField}
            multiline={true}
            rows={2}
            label="Vedenjske težave psa (uničevanje, markiranje, agresija, ...)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="d.likes"
            component={renderField}
            multiline={true}
            rows={2}
            label="Priljubljene aktivnosti in reči"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="d.afraid"
            component={renderField}
            multiline={true}
            rows={2}
            label="Stvari, ki prestrašijo vašega ljubljenčka"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Je vaš ljubljenček kastriran?</FormLabel>
            <Field name="d.isNutered" component={renderRadioGroup} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Je vaš ljubljenček iz zavetišča?</FormLabel>
            <Field name="d.fromKennel" component={renderRadioGroup} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Je vaš ljubljenček že kdaj koga ugriznil?</FormLabel>
            <Field name="d.hasBitten" component={renderRadioGroup} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Je vaš ljubljenček igriv?</FormLabel>
            <Field name="d.isPlayful" component={renderRadioGroup} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Ali vaš ljubljenček deli hrano in vodo z drugimi psi?</FormLabel>
            <Field name="d.aggressiveAroundFood" component={renderRadioGroup} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Ali vaš ljubljenček deli igrače z drugimi psi?</FormLabel>
            <Field name="d.aggressiveAroundToys" component={renderRadioGroup} />
          </FormControl>
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
})(PetDetailsForm);
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import SummaryItem from './SummaryItem';
import { Grid, Divider } from '@material-ui/core';

const SummaryPage = (props) => {
  const { c: customer, g: guardian, p: pet, d: details } = props.values || {};
  return (
    <form>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryItem item={customer} title='Podatki o lastniku' />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryItem item={guardian} title='Podatki za nujne primere' />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryItem item={pet} title='Podatki o psu' />
        </Grid>
      </Grid>
      <Divider />
    </form>
  )
}

const mapStateToProps = (state, props) => ({
  values: getFormValues(props.form)(state)
})

const cSummaryPage = connect(mapStateToProps)(SummaryPage);

export default reduxForm({
  form: 'boardingForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(cSummaryPage);
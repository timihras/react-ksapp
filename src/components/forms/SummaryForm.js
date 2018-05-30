import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import SummaryItem from './SummaryItem';

const SummaryPage = (props) => {
  const { c: customer, g: guardian, p: pet, d: details } = props.values || {};
  const { handleSubmit, pristine, prevPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="wizard__form">
      <h1>Podatki iz obrazca..</h1>
      <div className="wizard__summary">
        <SummaryItem item={customer} title='Podatki o lastniku' />
        <SummaryItem item={guardian} title='Podatki za nujne primere' />
        <SummaryItem item={pet} title='Podatki o psu' />
        <SummaryItem item={details} title='Podrobnosti o psu' />
      </div>
      <div className="wizard__actions">
        <button type="button" className="button link" onClick={prevPage}>
          <i className="fas fa-angle-left"></i> Nazaj
        </button>
        <button type="submit" className="button link" disabled={pristine || submitting}>
          Potrdi
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = (state, props) => ({
  values: getFormValues(props.form)(state)
})

const cSummaryPage = connect(mapStateToProps)(SummaryPage);

export default reduxForm({
  form: 'dog-boarding',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(cSummaryPage);
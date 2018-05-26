import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import SummaryItem from './SummaryItem';

const SummaryPage = (props) => {
  const { c: customer, g: guardian, p: pet } = props.values || {};
  const { handleSubmit, pristine, prevPage, submitting } = props;
  return (
    <div className="new-item__summary">
      <SummaryItem item={customer} title='Podatki o lastniku' />
      <SummaryItem item={guardian} title='Podatki za nujne primere' />
      <SummaryItem item={pet} title='Podatki o psu' />
      <form onSubmit={handleSubmit}>
        <button type="button" className="button link" onClick={prevPage}>
          <i className="fas fa-angle-left"></i> Nazaj
      </button>
        <button
          type="submit"
          className="button button__primary"
          disabled={pristine || submitting}
        >Potrdi
      </button>
      </form>
    </div>
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
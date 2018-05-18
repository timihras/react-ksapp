import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import SummaryItem from './SummaryItem';

const SummaryPage = (props) => {
  const { c: customer, g: guardian, p: pet } = props.values || {};
  const { onSubmit, prevPage } = props;
  return (
    <div className="new-item__summary">
      <SummaryItem item={customer} title='Podatki o lastniku' />
      <SummaryItem item={guardian} title='Podatki za nujne primere' />
      <SummaryItem item={pet} title='Podatki o psu' />
      <button type="button" className="button link" onClick={prevPage}>
        <i className="fas fa-angle-left"></i> Nazaj
      </button>
      <button type="submit" className="button link" onClick={onSubmit}>
        <i className="fas fa-angle-right"></i> Naprej
      </button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  values: getFormValues(props.form)(state)
})

export default connect(mapStateToProps)(SummaryPage);
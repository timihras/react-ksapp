import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import validate from './validate';

const PetDetailsForm = (props) => {
  const { handleSubmit, prevPage } = props;
  return (
    <form className="wizard__form" onSubmit={handleSubmit}>
      <h1 className="wizard__title">Pa še nekaj podrobnejših informacij..</h1>
      <div>
        <Field
          name="d.feeding"
          type="text"
          component={renderField}
          label="Navade hranjenja (vrsta hrane, količina in čas obrokov)"
          autoFocus={true}
        />
      </div>
      <div>
        <Field
          name="d.walking"
          type="text"
          component={renderField}
          label="Navade sprehajanja (čas in dolžina sprehodov)"
        />
      </div>
      <div>
        <Field
          name="d.health"
          type="text"
          component={renderField}
          label="Zdravstvene težave psa (alergije, poškodbe, druga zdravljenja, ...)"
        />
        <Field
          name="d.habits"
          type="text"
          component={renderField}
          label="Vedenjske težave psa (uničevanje, markiranje, agresija, ...)"
        />
      </div>
      <div>
        <Field
          name="d.likes"
          type="text"
          component={renderField}
          label="Priljubljene aktivnosti in reči"
        />
        <Field
          name="d.afraid"
          type="text"
          component={renderField}
          label="Stvari, ki prestrašijo vašega ljubljenčka"
        />
      </div>
      <div className="switch-field wizard__form-field">
        <div className="wizard__radio-title switch-title">Je vaš ljubljenček kastriran?</div>
        <div>
          <Field component="input" type="radio" name="d.isNutered" value="Yes" id="isnutered_yes" />
          <label htmlFor="isnutered_yes">Da</label>
          <Field component="input" type="radio" name="d.isNutered" value="No" id="isnutered_no" />
          <label htmlFor="isnutered_no">Ne</label>
          <Field component="input" type="radio" name="d.isNutered" value="Maybe" id="isnutered_maybe" />
          <label htmlFor="isnutered_maybe">Ne vem</label>
        </div>
      </div>
      <div className="switch-field wizard__form-field">
        <div className="wizard__radio-title switch-title">Je vaš ljubljenček iz zavetišča?</div>
        <div className="wizard__radio-options">
          <Field component="input" type="radio" name="d.fromKennel" value="Yes" id="fromkennel_yes" />
          <label htmlFor="fromkennel_yes">Da</label>
          <Field component="input" type="radio" name="d.fromKennel" value="No" id="fromkennel_no" />
          <label htmlFor="fromkennel_no">Ne</label>
          <Field component="input" type="radio" name="d.fromKennel" value="Maybe" id="fromkennel_maybe" />
          <label htmlFor="fromkennel_maybe">Ne vem</label>
        </div>
      </div>
      <div className="switch-field wizard__form-field">
        <div className="wizard__radio-title switch-title">Je vaš ljubljenček že kdaj koga ugriznil?</div>
        <div className="wizard__radio-options">
          <Field component="input" type="radio" name="d.hasBitten" value="Yes" id="hasbitten_yes" />
          <label htmlFor="hasbitten_yes">Da</label>
          <Field component="input" type="radio" name="d.hasBitten" value="No" id="hasbitten_no" />
          <label htmlFor="hasbitten_no">Ne</label>
          <Field component="input" type="radio" name="d.hasBitten" value="Maybe" id="hasbitten_maybe" />
          <label htmlFor="hasbitten_maybe">Ne vem</label>
        </div>
      </div>
      <div className="switch-field wizard__form-field hide">
        <div className="wizard__radio-title switch-title">Je vaš ljubljenček igriv?</div>
        <div className="wizard__radio-options">
          <Field component="input" type="radio" name="d.isPlayful" value="Yes" id="playful_yes" />
          <label htmlFor="playful_yes">Da</label>
          <Field component="input" type="radio" name="d.isPlayful" value="No" id="playful_no" />
          <label htmlFor="playful_no">Ne</label>
          <Field component="input" type="radio" name="d.isPlayful" value="Maybe" id="playful_maybe" />
          <label htmlFor="playful_maybe">Ne vem</label>
        </div>
      </div>
      <div className="switch-field wizard__form-field">
        <div className="wizard__radio-title switch-title">Ali vaš ljubljenček deli hrano in vodo z drugimi psi?</div>
        <div className="wizard__radio-options">
          <Field component="input" type="radio" name="d.aggressiveAroundFood" value="Yes" id="aggresivefood_yes" />
          <label htmlFor="aggresivefood_yes">Da</label>
          <Field component="input" type="radio" name="d.aggressiveAroundFood" value="No" id="aggresivefood_no" />
          <label htmlFor="aggresivefood_no">Ne</label>
          <Field component="input" type="radio" name="d.aggressiveAroundFood" value="Maybe" id="aggresivefood_maybe" />
          <label htmlFor="aggresivefood_maybe">Ne vem</label>
        </div>
      </div>
      <div className="switch-field wizard__form-field">
        <div className="wizard__radio-title switch-title">Ali vaš ljubljenček deli igrače z drugimi psi?</div>
        <div className="wizard__radio-options">
          <Field component="input" type="radio" name="d.aggressiveAroundToys" value="Yes" id="aggressivetoys_yes" />
          <label htmlFor="aggressivetoys_yes">Da</label>
          <Field component="input" type="radio" name="d.aggressiveAroundToys" value="No" id="aggressivetoys_no" />
          <label htmlFor="aggressivetoys_no">Ne</label>
          <Field component="input" type="radio" name="d.aggressiveAroundToys" value="Maybe" id="aggressivetoys_maybe" />
          <label htmlFor="aggressivetoys_maybe">Ne vem</label>
        </div>
      </div>

      <div className="wizard__actions">
        <button type="button" className="button link" onClick={prevPage}>
          <i className="fas fa-angle-left"></i> Nazaj
        </button>

        <button type="submit" className="button link">
          <i className="fas fa-angle-right"></i> Preskoči
        </button>
        <button type="submit" className="button link">
          <i className="fas fa-angle-right"></i> Naprej
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'dog-boarding',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(PetDetailsForm);
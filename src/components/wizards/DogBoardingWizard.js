import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues, reset } from 'redux-form';
import CustomerForm from '../forms/CustomerForm';
import GuardianForm from '../forms/GuardianForm';
import PetForm from '../forms/PetForm';
import SummaryForm from '../forms/SummaryForm';
import PetDetailsForm from '../forms/PetDetailsForm';
import { submitWizard } from '../../actions/wizard';

class DogBoardingWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    }
  }

  nextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
  }

  prevPage = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1
    }));
  }

  onClickNav = (page) => {
    this.setState(() => ({
      page
    }))
  }

  onSubmit = (values) => {
    return this.props.submitWizard(values).then(() => {
      this.props.reset();
      this.props.history.push('/customers');
    });
  }

  render() {
    const { page } = this.state;
    return (
      <div className="wizard">
        <div className="wizard__table-of-contents">
          <ul>
            <li
              className={(page === 1 ? 'active' : '') + (page > 1 ? ' finish' : '')}
              onClick={() => this.onClickNav(1)}
            >Podatki o lastniku</li>
            <li
              className={(page === 2 ? 'active' : '') + (page > 2 ? ' finish' : '')}
              onClick={() => this.onClickNav(2)}
            >Podatki za nujne primere</li>
            <li
              className={(page === 3 ? 'active' : '') + (page > 3 ? ' finish' : '')}
              onClick={() => this.onClickNav(3)}
            >Podatki o ljubljenčku</li>
            <li
              className={(page === 4 ? 'active' : '') + (page > 4 ? ' finish' : '')}
              onClick={() => this.onClickNav(4)}
            >Podrobnosti o ljubljenčku</li>
            <li
              className={(page === 5 ? 'active' : '')}
              onClick={() => this.onClickNav(5)}
            >Povzetek</li>
          </ul>
        </div>

        {page === 1 && <CustomerForm
          onSubmit={this.nextPage}
        />}
        {page === 2 && <GuardianForm
          prevPage={this.prevPage}
          onSubmit={this.nextPage}
        />}
        {page === 3 && <PetForm
          prevPage={this.prevPage}
          onSubmit={this.nextPage}
        />}
        {page === 4 && <PetDetailsForm
          prevPage={this.prevPage}
          onSubmit={this.nextPage}
        />}
        {page === 5 && <SummaryForm
          prevPage={this.prevPage}
          onSubmit={this.onSubmit}
          form="dog-boarding"
        />}

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  values: getFormValues(props.form)(state)
})

const mapDispatchToProps = (dispatch) => ({
  submitWizard: (formData) => dispatch(submitWizard(formData)),
  reset: () => dispatch(reset('dog-boarding'))
})

export default connect(mapStateToProps, mapDispatchToProps)(DogBoardingWizard);
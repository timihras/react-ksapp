import React, { Component } from 'react';
import CustomerForm from '../forms/CustomerForm';
import GuardianForm from '../forms/GuardianForm';
import PetForm from '../forms/PetForm';
import SummaryPage from './SummaryPage';

class DogBoardingWizard extends Component {
  constructor() {
    super();
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

  onSubmit = () => {
    console.log('submit');
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
              className={(page === 4 ? 'active' : '')}
              onClick={() => this.onClickNav(4)}
            >Povzetek</li>
          </ul>
        </div>
        <div>

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
          {page === 4 && <SummaryPage
            prevPage={this.prevPage}
            onSubmit={this.onSubmit}
            form="dog-boarding"
          />}

        </div>
      </div>
    )
  }
}

export default DogBoardingWizard;
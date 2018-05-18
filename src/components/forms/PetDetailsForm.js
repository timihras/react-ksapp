import React, { Component } from 'react'

export default class PetDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeding: props.petDetails ? props.petDetails.feeding : '',
      walking: props.petDetails ? props.petDetails.walking : '',
      health: props.petDetails ? props.petDetails.health : '',
      habits: props.petDetails ? props.petDetails.habits : '',
      likes: props.petDetails ? props.petDetails.likes : [],
      dislikes: props.petDetails ? props.petDetails.dislikes : [],
      afraid: props.petDetails ? props.petDetails.afraid : [],
      isNeutered: props.petDetails ? props.petDetails.isNeutered : '',
      fromKennel: props.petDetails ? props.petDetails.fromKennel : '',
      hasBitten: props.petDetails ? props.petDetails.hasBitten : '',
      isPlayful: props.petDetails ? props.petDetails.isPlayful : '',
      aggressiveAroundFood: props.petDetails ? props.petDetails.aggressiveAroundFood : '',
      aggressiveAroundToys: props.petDetails ? props.petDetails.aggressiveAroundToys : '',
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log('Submited');
  }
  onChange = (e) => {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(() => ({
      ...state
    }));
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          autoFocus
          className="text-input"
          name="feeding"
          onChange={this.onChange}
          placeholder="Navade hranjenja (vrsta hrane, količina in čas obrokov)"
          value={this.state.feeding}
        />
        <input
          type="text"
          className="text-input"
          name="walking"
          onChange={this.onChange}
          placeholder="Navade sprehajanja (čas in dolžina sprehodov)"
          value={this.state.walking}
        />
        <input
          type="text"
          className="text-input"
          name="health"
          onChange={this.onChange}
          placeholder="Zdravstvene težave psa (alergije, poškodbe, druga zdravljenja, ...)"
          value={this.state.health}
        />
        <input
          type="text"
          className="text-input"
          name="habits"
          onChange={this.onChange}
          placeholder="Vedenjske težave psa (uničevanje, markiranje, agresija, ...)"
          value={this.state.habits}
        />
        <input
          type="text"
          className="text-input"
          name="likes"
          onChange={this.onChange}
          placeholder="Priljubljene aktivnosti in reči"
          value={this.state.likes}
        />
        <input
          type="text"
          className="text-input"
          name="dislikes"
          onChange={this.onChange}
          placeholder="Nepriljubljene aktivnosti in reči"
          value={this.state.dislikes}
        />
        <input
          type="text"
          className="text-input"
          name="afraid"
          onChange={this.onChange}
          placeholder="Stvari, ki prestrašijo vašega ljubljenčka"
          value={this.state.afraid}
        />
        <div>
          <div>Je vaš ljubljenček kastriran?</div>
          <div onChange={this.onChange}>
            <label><input type="radio" name="isNutered" value="Yes" /><span>Da</span></label>
            <label><input type="radio" name="isNutered" value="No" /><span>Ne</span></label>
            <label><input type="radio" name="isNutered" value="Maybe" /><span>Ne vem</span></label>
          </div>
        </div>
        <div>
          <div>Je vaš ljubljenček iz zavetišča?</div>
          <div onChange={this.onChange}>
            <label><input type="radio" name="fromKennel" value="Yes" /><span>Da</span></label>
            <label><input type="radio" name="fromKennel" value="No" /><span>Ne</span></label>
            <label><input type="radio" name="fromKennel" value="Maybe" /><span>Ne vem</span></label>
          </div>
        </div>
        <div>
          <div>Je vaš ljubljenček že kdaj koga ugriznil?</div>
          <div onChange={this.onChange}>
            <label><input type="radio" name="hasBitten" value="Yes" /><span>Da</span></label>
            <label><input type="radio" name="hasBitten" value="No" /><span>Ne</span></label>
            <label><input type="radio" name="hasBitten" value="Maybe" /><span>Ne vem</span></label>
          </div>
        </div>
        <div>
          <div>Je vaš ljubljenček igriv?</div>
          <div onChange={this.onChange}>
            <label><input type="radio" name="isPlayful" value="Yes" /><span>Da</span></label>
            <label><input type="radio" name="isPlayful" value="No" /><span>Ne</span></label>
            <label><input type="radio" name="isPlayful" value="Maybe" /><span>Ne vem</span></label>
          </div>
        </div>
        <div>
          <div>Ali vaš ljubljenček deli hrano in vodo z drugimi psi?</div>
          <div onChange={this.onChange}>
            <label><input type="radio" name="aggressiveAroundFood" value="Yes" /><span>Da</span></label>
            <label><input type="radio" name="aggressiveAroundFood" value="No" /><span>Ne</span></label>
            <label><input type="radio" name="aggressiveAroundFood" value="Maybe" /><span>Ne vem</span></label>
          </div>
        </div>
        <div>
          <div>Ali vaš ljubljenček deli igrače z drugimi psi?</div>
          <div onChange={this.onChange}>
            <label><input type="radio" name="aggressiveAroundToys" value="Yes" /><span>Da</span></label>
            <label><input type="radio" name="aggressiveAroundToys" value="No" /><span>Ne</span></label>
            <label><input type="radio" name="aggressiveAroundToys" value="Maybe" /><span>Ne vem</span></label>
          </div>
        </div>
      </form>
    )
  }
}

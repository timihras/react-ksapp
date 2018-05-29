import React from 'react'

const replaceKeyWithName = (keyValue) => {
  const keys = [
    'firstName', 'lastName', 'address', 'post', 'city', 'phoneNumber', 'email',   // Customer, Guardian
    'birth', 'breed', 'name', 'owner', 'type', 'gender',                          // Pet
    'feeding', 'walking', 'health', 'likes', 'habits', 'afraid',
    'isNutered', 'fromKennel', 'isPlayful', 'hasBitten', 'aggressiveAroundFood', 'aggressiveAroundToys' // Details
  ];

  const names = [
    'Ime', 'Priimek', 'Naslov', 'Pošta', 'Mesto', 'Tel. št.', 'Email',            // Customer, Guardian
    'Letnik', 'Pasma', 'Ime', 'Lastnik', 'Vrsta', 'Spol',                         // Pet
    'Hranjenje', 'Sprehodi', 'Zdravje', 'Obožuje', 'Navade', 'Se boji',
    'Kastriran', 'Iz zavetišča', 'Je igriv', 'Je ugriznil', 'Agresiven ob hrani', 'Agresiven ob igračah' // Details
  ];

  const index = keys.findIndex((key) => key === keyValue);
  return index >= 0 ? names[index] : keyValue;
}

const SummaryItem = (props) => {
  const item = props.item ? props.item : {};
  return (
    <div className="summary">
      {props.title && props.item ? <div className="summary__title">{props.title}</div> : ''}
      <div className="summary__list">
        {
          Object.keys(item).map((key) => <p className="summary__item" key={key}><span>{replaceKeyWithName(key)}:</span> <span>{item[key]}</span></p>)
        }
      </div>
    </div>
  )
}

export default SummaryItem;
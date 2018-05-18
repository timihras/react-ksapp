import React from 'react'

const replaceKeyWithName = (keyValue) => {
  let result = keyValue;

  const keys = [
    'firstName', 'lastName', 'address', 'post', 'city', 'phoneNumber', 'email',   // Customer, Guardian
    'birth', 'breed', 'name', 'owner', 'type', 'gender'                           // Pet
  ];

  const names = [
    'Ime', 'Priimek', 'Naslov', 'Pošta', 'Mesto', 'Tel. št.', 'Email',            // Customer, Guardian
    'Letnik', 'Pasma', 'Ime', 'Lastnik', 'Vrsta', 'Spol'                          // Pet
  ];

  keys.forEach((key, index) => {
    if (key === keyValue) {
      result = names[index];
    }
  })

  return result;
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
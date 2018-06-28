import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

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

const replaceValueWithName = (keyValue) => {
  const values = [
    'dog', 'cat', 'other', 'male', 'female',
  ];

  const names = [
    'Pes', 'Mačka', 'Ostalo', 'Samec', 'Samica',
  ];

  const index = values.findIndex((key) => key === keyValue);
  return index >= 0 ? names[index] : keyValue;
}

const SummaryItem = (props) => {
  const item = props.item ? props.item : {};
  return (
    <div>
      {props.title && props.item ? <Typography gutterBottom>{props.title}</Typography> : ''}
      <List dense disablePadding>
        {
          Object.keys(item).map((key) => (
            <ListItem dense key={key}>
              <ListItemText primary={replaceKeyWithName(key)} secondary={replaceValueWithName(item[key])} className="wizard__summary-item" />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default SummaryItem;
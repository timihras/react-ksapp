
export default (keyValue) => {
  const values = [
    'dog', 'cat', 'other', 'male', 'female', 'Yes', 'No', 'Maybe'
  ];

  const names = [
    'Pes', 'Mačka', 'Ostalo', 'Samec', 'Samica', 'Da', 'Ne', 'Morda'
  ];

  const index = values.findIndex((key) => key === keyValue);
  return index >= 0 ? names[index] : keyValue;
}
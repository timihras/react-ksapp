
export default (keyValue) => {
  const values = [
    'dog', 'cat', 'other', 'male', 'female',
  ];

  const names = [
    'Pes', 'Mačka', 'Ostalo', 'Samec', 'Samica',
  ];

  const index = values.findIndex((key) => key === keyValue);
  return index >= 0 ? names[index] : keyValue;
}
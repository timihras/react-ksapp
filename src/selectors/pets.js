export default (pets, { text }) => {
  return pets.filter((pet) => {
    const nameMatch = pet.name.toLowerCase().includes(text.toLowerCase());

    return nameMatch;
  }).sort((a, b) => {
    return a.name > b.name;
  });
}

export default (pets, customers, petId) => {
  if (pets.length !== 0 && customers.length !== 0) {
    const pet = pets.find((pet) => pet.id === petId);
    const owner = customers.find((customer) => customer.id === pet.owner);

    return {
      ...pet,
      ownerFullName: owner ? owner.firstName + ' ' + owner.lastName : undefined
    };
  };
}
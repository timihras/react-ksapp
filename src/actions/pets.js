import database from '../firebase/firebase';

//ADD_PET
export const addPet = (pet) => ({
  type: 'ADD_PET',
  pet
});

export const startAddPet = (pet) => {
  return (dispatch) => {
    return database.collection('pets').add(pet).then((ref) => {
      dispatch(addPet({
        id: ref.id,
        ...pet
      }));
    });
  }
}

//EDIT_PET
export const editPet = (id, updates) => ({
  type: 'EDIT_PET',
  id,
  updates
});

export const startEditPet = (id, updates) => {
  return (dispatch) => {
    return database.collection('pets').doc(id).set(updates, { merge: true }).then(() => {
      dispatch(editPet(id, updates));
    });
  };
};

//DEACTIVATE_PET
export const deactivatePet = (id) => ({
  type: 'DEACTIVATE_PET',
  id
});

export const startDeactivatePet = (id, reason = 'Deleted') => {
  return (dispatch) => {
    const petRef = database.collection('pets').doc(id);
    return petRef.get().then((ref) => {
      database.collection('obsolete_pets').doc(ref.id)
        .set({ reason, ...ref.data() }, { merge: true }).then(() => {
          petRef.delete().then(() => {
            dispatch(deactivatePet(id));
          });
        });
    });
  }
}

//SET_PETS
export const setPets = (pets) => ({
  type: 'SET_PETS',
  pets
});

export const startSetPets = () => {
  return (dispatch) => {
    let pets = [];
    return database.collection('pets').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        pets.push({
          id: doc.id,
          ...doc.data()
        });
      });
      dispatch(setPets(pets));
    });
  }
}

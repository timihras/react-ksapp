const defaultPetsReducerState = [];

export default (state = defaultPetsReducerState, action) => {
  switch (action.type) {
    case 'ADD_PET':
      return [
        ...state,
        action.pet
      ]
    case 'EDIT_PET':
      return state.map((pet) => {
        if (pet.id === action.id) {
          return {
            ...pet,
            ...action.updates
          }
        } else {
          return pet
        }
      })
    case 'DEACTIVATE_PET':
      return state.filter((pet) => pet.id !== action.id);
    case 'SET_PETS':
      return action.pets;
    default:
      return state;
  }
}
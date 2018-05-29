import database from '../firebase/firebase';

// ADD CUSTOMER

const addCustomer = (customer) => ({
  type: 'ADD_CUSTOMER',
  customer
});

// ADD PET

const addPet = (pet) => ({
  type: 'ADD_PET',
  pet
});

// WIZARD

export const submitWizard = (formData) => {
  return (dispatch) => {
    const {
      firstName = '',
      lastName = '',
      address = '',
      post = '',
      city = '',
      phoneNumber = '',
      email = ''
    } = formData.c;

    const guardians = [{
      firstName: formData.g.firstName || '',
      lastName: formData.g.lastName || '',
      phoneNumber: formData.g.phoneNumber || '',
      email: formData.g.email || ''
    }]

    const customer = { firstName, lastName, address, post, city, phoneNumber, email, guardians };

    return database.collection('customers').add(customer).then((ref) => {
      dispatch(addCustomer({
        id: ref.id,
        ...customer
      }))

      const {
        name = '',
        type = '',
        gender = '',
        birth = 0,
        breed = ''
      } = formData.p;

      const {
        feeding = '', walking = '', health = '', habits = '', likes = '', afraid = '',
        isNutered = 'Maybe', fromKennel = 'Maybe', hasBitten = 'Maybe', isPlayful = 'Maybe',
        aggressiveAroundFood = 'Maybe', aggressiveAroundToys = 'Maybe',
      } = formData.d

      const data = { feeding, walking, health, habits, likes, afraid, isNutered, fromKennel, hasBitten, isPlayful, aggressiveAroundFood, aggressiveAroundToys };

      const owner = ref.id;

      const pet = { name, type, gender, birth, breed, data, owner };

      return database.collection('pets').add(pet).then((ref) => {
        dispatch(addPet({
          id: ref.id,
          ...pet
        }))
      })

    })
  }
}
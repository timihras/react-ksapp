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
    const customer = { firstName, lastName, address, post, city, phoneNumber, email };
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
      const owner = ref.id;
      const pet = { name, type, gender, birth, breed, owner };
      return database.collection('pets').add(pet).then((ref) => {
        dispatch(addPet({
          id: ref.id,
          ...pet
        }))
      })

    })
  }
}
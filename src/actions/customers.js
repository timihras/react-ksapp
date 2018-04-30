import database from '../firebase/firebase';

//ADD_CUSTOMER
export const addCustomer = (customer) => ({
  type: 'ADD_CUSTOMER',
  customer
});

export const startAddCustomer = (customerData = {}) => {
  return (dispatch) => {
    const {
      firstName = '',
      lastName = '',
      address = '',
      post = 0,
      city = '',
      phoneNumber = '',
      email = ''
    } = customerData;
    const customer = { firstName, lastName, address, post, city, phoneNumber, email }
    database.collection('customers').add(customerData).then((ref) => {
      dispatch(addCustomer({
        id: ref.id,
        ...customer
      }));
    });
  };
};

//EDIT_CUSTOMER
export const editCustomer = (id, updates) => ({
  type: 'EDIT_CUSTOMER',
  id,
  updates
})

export const startEditCustomer = (id, updates) => {
  return (dispatch) => {
    return database.collection('customers').doc(id).set(updates, { merge: true }).then(() => {
      dispatch(editCustomer(id, updates));
    }
    );
  };
};

//DEACTIVATE_CUSTOMER
export const deactivateCustomer = (id) => ({
  type: 'DEACTIVATE_CUSTOMER',
  id
});

export const startDeactivateCustomer = (id, reason = 'Deleted') => {
  return (dispatch) => {
    const customerRef = database.collection('customers').doc(id);
    customerRef.get().then((ref) => {
      database.collection('obsolete_customers').doc(ref.id)
        .set({ reason, ...ref.data() }, { merge: true }).then(() => {
          customerRef.delete().then(() => {
            dispatch(deactivateCustomer(id));
          })
        });
    });
    // database.collection('obsolete_customers').doc(doc.id).set()
    // console.log(doc);
    // console.log('id', doc.id);
    // console.log('get', doc.get().toObject());
    // database.collection('obsolete_customers').add(database.collection('customers').doc(id));
  };
};

//SET_CUSTOMERS
export const setCustomers = (customers) => ({
  type: 'SET_CUSTOMERS',
  customers
});

export const startSetCustomers = () => {
  return (dispatch) => {
    return database.collection("customers").get().then((snapshot) => {
      let customers = [];
      snapshot.forEach((doc) => {
        customers.push({
          id: doc.id,
          ...doc.data()
        });
      });
      dispatch(setCustomers(customers));
    });
  };
};

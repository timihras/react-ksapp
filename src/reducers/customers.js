const customerReducerDefaultState = [];

export default (state = customerReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return [
        ...state,
        action.customer
      ];
    case 'EDIT_CUSTOMER':
      return state.map((customer) => {
        if (customer.id === action.id) {
          return {
            ...customer,
            ...action.updates
          }
        } else {
          return customer
        };
      });
    case 'DEACTIVATE_CUSTOMER':
      return state.filter(({id}) => id !== action.id);
    case 'SET_CUSTOMERS':
      return action.customers;
    default:
      return state;
  }
};
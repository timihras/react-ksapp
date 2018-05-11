export default (customers) => {
  return customers.map((customer) => (
    {
      id: customer.id,
      fullName: customer.firstName + ' ' + customer.lastName
    }
  ));
};
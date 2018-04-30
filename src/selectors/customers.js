// export default (customers) => {
//   console.log('selector', customers);
//   return customers.filter((customer) => {
//     return true;
//   });
// };

export default (customers, { text }) => {
  return customers.filter((customer) => {
    const firstNameMatch = customer.firstName.toLowerCase().includes(text.toLowerCase());
    const lastNameMatch = customer.lastName.toLowerCase().includes(text.toLowerCase());
    return firstNameMatch || lastNameMatch;
  }).sort((a, b) => {
    return a.lastName > b.lastName;
  });
};
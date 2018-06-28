const validate = values => {
  const errors = {
    c: {},
    g: {},
    p: {},
    d: {}
  };

  if (!values.c) {
    values.c = {};
  }
  if (!values.c.firstName) {
    errors.c.firstName = 'To polje je obvezno.';
  }
  if (!values.c.phoneNumber) {
    errors.c.phoneNumber = 'To polje je obvezno.';
  }
  if (values.c.email && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.c.email))) {
    errors.c.email = 'Vpisana vrednost ni email.';
  }

  if (!values.g) {
    values.g = {};
  }
  if (!values.g.firstName) {
    errors.g.firstName = 'To polje je obvezno.';
  }
  if (!values.g.phoneNumber) {
    errors.g.phoneNumber = 'To polje je obvezno.';
  }
  if (values.g.email && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.g.email))) {
    errors.g.email = 'Vpisana vrednost ni email.';
  }

  if (!values.p) {
    values.p = {};
  }
  if (!values.p.type) {
    errors.p.type = 'To polje je obvezno.';
  }
  if (!values.p.name) {
    errors.p.name = 'To polje je obvezno.';
  }

  return errors;
};

export default validate;

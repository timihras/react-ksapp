export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.displayName,
        photoURL: action.photoURL,
        roles: action.roles
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
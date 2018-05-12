export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.displayName,
        photoUrl: action.photoUrl
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
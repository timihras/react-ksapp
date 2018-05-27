import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName, photoURL, roles) => ({
  type: 'LOGIN',
  uid,
  displayName,
  photoURL,
  roles
});

export const setUser = (uid) => {
  return (dispatch) => {
    return firebase.firestore().collection('users').doc(uid).get().then((doc) => {
      const { uid, displayName, photoURL, roles } = doc.data();
      dispatch(login(uid, displayName, photoURL, roles));
      return doc.data();
    });
  }
}

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((credentials) => {
      updateUserData(credentials.user);
    });
  };
};

const updateUserData = (user) => {
  const data = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL || '',
    roles: {
      subscriber: true
    }
  };
  firebase.firestore().collection('users').doc(user.uid).set(data, { merge: true });
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};
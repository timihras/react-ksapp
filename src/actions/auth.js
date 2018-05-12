import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName, photoUrl) => ({
  type: 'LOGIN',
  uid,
  displayName,
  photoUrl
});

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
    photoUrl: user.photoUrl,
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
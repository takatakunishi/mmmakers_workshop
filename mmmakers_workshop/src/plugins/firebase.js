import firebase from 'firebase';

const config = {
  authDomain: "fakestrage-6c366.firebaseapp.com",
  databaseURL: "https://fakestrage-6c366.firebaseio.com",
  projectId: "fakestrage-6c366",
  storageBucket: "fakestrage-6c366.appspot.com",
  messagingSenderId: "215709672275",
  measurementId: "G-MTQYG4EW0S"
};

export const firebaseApp = firebase.initializeApp(config);

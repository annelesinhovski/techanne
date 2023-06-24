import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCAccpWJzin5HAwplcCaMmMjuYzZvzt7u0',
  authDomain: 'lista-espera-mentoria-92e9a.firebaseapp.com',
  projectId: 'lista-espera-mentoria-92e9a',
  storageBucket: 'lista-espera-mentoria-92e9a.appspot.com',
  messagingSenderId: '885384579742',
  appId: '1:885384579742:web:d3f5cd538bbf427dbf098f',
});

var db = firebaseApp.firestore();

export { db };

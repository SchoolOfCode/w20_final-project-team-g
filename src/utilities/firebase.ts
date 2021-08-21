import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCGYbNUBJFJrhArGziHMNY8Mm6ZaLefGdQ',
  authDomain: 'my-cool-app-78652.firebaseapp.com',
  projectId: 'my-cool-app-78652',
  storageBucket: 'my-cool-app-78652.appspot.com',
  messagingSenderId: '961236720020',
  appId: '1:961236720020:web:3c2f311869dcedf8f05781',
  measurementId: 'G-W2ZHJ4989R',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

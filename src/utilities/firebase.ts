import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAjhCbSOalsOQtSxrzB7pmyjeimxF2Ldik',
  authDomain: 'kaizenpractice-db496.firebaseapp.com',
  databaseURL:
    'https://kaizenpractice-db496-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kaizenpractice-db496',
  storageBucket: 'kaizenpractice-db496.appspot.com',
  messagingSenderId: '672461987529',
  appId: '1:672461987529:web:6621ae7c8ef481701e3718',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

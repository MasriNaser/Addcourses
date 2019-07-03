//init firebase
import firebase from 'firebase/app';
import 'firebase/storage';
const config = {
  apiKey: 'AIzfhrwkKhDBFHbntnKhTahHjkNK6FG875dSB6y',
  authDomain: 'typecode-76g33.firebaseapp.com',
  databaseURL: 'https://typecode-76g33.firebaseio.com',
  projectId: 'typecode-76g33',
  storageBucket: '',
  messagingSenderId: '547432956432'
};
firebase.initializeApp(config);
var db = firebase.firestore();
// db.collection('users')
//   .add({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
//   })
//   .then(function(docRef) {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch(function(error) {
//     console.error('Error adding document: ', error);
//   });

export default firebase;

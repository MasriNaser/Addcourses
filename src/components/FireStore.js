//init firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzfhrwkKhDBFHbntnKhTahHjkNK6FG875dSB6y',
  authDomain: 'typecode-76g33.firebaseapp.com',
  databaseURL: 'https://typecode-76g33.firebaseio.com',
  projectId: 'typecode-76g33',
  storageBucket: '',
  messagingSenderId: '547432956432'
});

const storage = app.firestore();
//const ref = storage.ref('users');
//storage.settings({timestampInSnapshots: true})
export { storage };
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const config = {
//   apiKey: 'AIzfhrwkKhDBFHbntnKhTahHjkNK6FG875dSB6y',
//   authDomain: 'typecode-76g33.firebaseapp.com',
//   databaseURL: 'https://typecode-76g33.firebaseio.com',
//   projectId: 'typecode-76g33',
//   storageBucket: '',
//   messagingSenderId: '547432956432'
// };
// firebase.initializeApp(config);
// let db = firebase.firestore();

// export default db;

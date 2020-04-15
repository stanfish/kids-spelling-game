import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  //Add your firebase config here
};

firebase.initializeApp(config);

export default firebase;

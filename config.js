import * as firebase from 'firebase'

require("@firebase/firestore")

  var firebaseConfig = {
    apiKey: "AIzaSyC1R_fkdTNyU1_xvtZmARnkyY2n-c_rf10",
    authDomain: "story-hub-d43fd.firebaseapp.com",
    databaseURL: "https://story-hub-d43fd-default-rtdb.firebaseio.com",
    projectId: "story-hub-d43fd",
    storageBucket: "story-hub-d43fd.appspot.com",
    messagingSenderId: "66721980685",
    appId: "1:66721980685:web:bffc9313b837358a3fd044"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
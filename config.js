import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAnkGWp5ZBeODdKcqlKjpak0CUns478NGU",
  authDomain: "my-pet-health-63904.firebaseapp.com",
  projectId: "my-pet-health-63904",
  storageBucket: "my-pet-health-63904.appspot.com",
  messagingSenderId: "403659321944",
  appId: "1:403659321944:web:7abca198b8c0a83f8ed02d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

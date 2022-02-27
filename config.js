import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAz9i8y5CwjCFghNj2OjHV-y8nClPfqRoA",
  authDomain: "e-ride-stage-4-75e56.firebaseapp.com",
  projectId: "e-ride-stage-4-75e56",
  storageBucket: "e-ride-stage-4-75e56.appspot.com",
  messagingSenderId: "802877853209",
  appId: "1:802877853209:web:8b8c80a9306692d5cc6488"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

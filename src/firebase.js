import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdB4hUyXw4-c-AfgVlbzJ6aqM5hwsSMQw",
  authDomain: "disney-plus-f56f4.firebaseapp.com",
  projectId: "disney-plus-f56f4",
  storageBucket: "disney-plus-f56f4.appspot.com",
  messagingSenderId: "546205283547",
  appId: "1:546205283547:web:8670b58707d5a1dfdcc8fe",
  measurementId: "G-87ZFQG57C7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDtvo3Hd42eB8Af542TL5Jc5zCe90FGpso",
  authDomain: "linkedin-clone-c92ee.firebaseapp.com",
  projectId: "linkedin-clone-c92ee",
  storageBucket: "linkedin-clone-c92ee.appspot.com",
  messagingSenderId: "674717560651",
  appId: "1:674717560651:web:c63050bfaf38475ece82ce",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;

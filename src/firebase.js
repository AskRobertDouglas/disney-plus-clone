import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfJZujxid_CJoEtzSUZYlxO0hxqBAtP08",
  authDomain: "disney-clone-a3e03.firebaseapp.com",
  projectId: "disney-clone-a3e03",
  storageBucket: "disney-clone-a3e03.appspot.com",
  messagingSenderId: "371633509265",
  appId: "1:371633509265:web:9bfa1869391ad6b582c030",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

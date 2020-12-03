// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGsOuTBDDuk_ShFoHjnWolhM8nwcnmiYU",
  authDomain: "whatsapp-clone-63d21.firebaseapp.com",
  projectId: "whatsapp-clone-63d21",
  storageBucket: "whatsapp-clone-63d21.appspot.com",
  messagingSenderId: "740977498199",
  appId: "1:740977498199:web:1150800773c2e42ff26b12",
  measurementId: "G-DTF0S2MKX5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

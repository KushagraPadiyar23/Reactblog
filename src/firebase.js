import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDG4Ab6ncfncRkMdbbTlIVgCDKnADiS80o",
  authDomain: "react-hooks-blog-15809.firebaseapp.com",
  projectId: "react-hooks-blog-15809",
  storageBucket: "react-hooks-blog-15809.appspot.com",
  messagingSenderId: "912547295757",
  appId: "1:912547295757:web:ed3c00cdd31ddccd029b44"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore();
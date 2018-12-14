import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCu0wwvjA54kY79EXUHbuMKus5hzm_gPPA",
  authDomain: "ninja-todo-b5d90.firebaseapp.com",
  databaseURL: "https://ninja-todo-b5d90.firebaseio.com",
  projectId: "ninja-todo-b5d90",
  storageBucket: "ninja-todo-b5d90.appspot.com",
  messagingSenderId: "897218018812"
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;

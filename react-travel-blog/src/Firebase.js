import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB3fzE_p6Seipn5gscsC1PWdrLgV0DYAQo",
	authDomain: "poelles-travel-time.firebaseapp.com",
	databaseURL: "https://poelles-travel-time.firebaseio.com",
	projectId: "poelles-travel-time",
	storageBucket: "poelles-travel-time.appspot.com",
	messagingSenderId: "342129893787",
	appId: "1:342129893787:web:00e3f7653473a43758413e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;

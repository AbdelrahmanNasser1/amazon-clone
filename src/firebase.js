// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyArjOt18LDtB-MyZBQofgMrL5ezNXZiecM',
	authDomain: 'challenge-7686f.firebaseapp.com',
	databaseURL: 'https://challenge-7686f.firebaseio.com',
	projectId: 'challenge-7686f',
	storageBucket: 'challenge-7686f.appspot.com',
	messagingSenderId: '88743807837',
	appId: '1:88743807837:web:5bccc0f81420a379a336b4',
	measurementId: 'G-79HQTFXGV0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

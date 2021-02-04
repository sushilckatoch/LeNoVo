import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to seed the database

// we need a config here
const config = 
{

    apiKey: "AIzaSyB6mGz6CV_UxyrIEtBeTLhM7GFJSOGEJ8k",
    authDomain: "netflix-64b35.firebaseapp.com",
    projectId: "netflix-64b35",
    storageBucket: "netflix-64b35.appspot.com",
    messagingSenderId: "294921594696",
    appId: "1:294921594696:web:4fce0732ac0cd94e34357d"
    
};

const firebase =Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
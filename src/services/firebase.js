import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3zOLucuuki6duZEU18sWKcHewVCMzBro",
    authDomain: "react-javier-nunez.firebaseapp.com",
    projectId: "react-javier-nunez",
    storageBucket: "react-javier-nunez.appspot.com",
    messagingSenderId: "835618000017",
    appId: "1:835618000017:web:e304615e1aad48f1f98330"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export default firestoreDB
import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { getFirestore, collection, query, where, getDocs,orderBy ,limit } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD_Nb7oB--HFVhnNrZ8K7N2Mz9s7FKVSV0",
    authDomain: "chatstore-5c9fd.firebaseapp.com",
    projectId: "chatstore-5c9fd",
    storageBucket: "chatstore-5c9fd.appspot.com",
    messagingSenderId: "338886617285",
    appId: "1:338886617285:web:e97d5a16d7d136169fe8ac",
    measurementId: "G-ES6VWFKPHL"

}
const firebaseApp = initializeApp(firebaseConfig);
export  const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

export   const colRef=collection(db,'messages')
 export    const col=  query(colRef,orderBy ('createdAt'),limit(50))



export default firebaseApp
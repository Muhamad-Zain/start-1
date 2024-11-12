// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, get, child, set} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: 'invitee-next.firebaseapp.com',
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: 'invitee-next',
//     storageBucket: 'invitee-next.appspot.com',
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
//   };

  const firebaseConfig = {
    apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "start-ea4be.firebaseapp.com",
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: "start-ea4be",
    storageBucket: "start-ea4be.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: "G-DZFJ5NH7FN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
// const analytics = getAnalytics(app);

const fetchWeddingData = async (id) => {
    const dbRef = ref(database);
    try {
        const data = await get(child(dbRef, `/startOne/${id}`))
        if (data.exists()) {
            return data.val()
        } else {
            console.log('eror' );
            return null
        }
    } catch (error) {
        console.log('tidak bekerja', error);
        return null
    }
}
const addDataToFirebase = async (id, formData) => {
    // const id = formData.id || Date.now().toString();
    // const id =  Date.now().toString();

    try {
      await set(ref(database, `/startOne/${id}`), formData);
      console.log("Data successfully added!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
    
  };
  
export {app, database, fetchWeddingData,addDataToFirebase}
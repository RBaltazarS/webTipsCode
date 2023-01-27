
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDYiMlWwz-Qb53fnIJENBbrGwW3RHb0mjA",
  authDomain: "webtipscode.firebaseapp.com",
  projectId: "webtipscode",
  storageBucket: "webtipscode.appspot.com",
  messagingSenderId: "139758724937",
  appId: "1:139758724937:web:a231814b550ab20a045c98"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
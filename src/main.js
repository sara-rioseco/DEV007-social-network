// Este es el punto de entrada de tu aplicacion
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoPzifXuWI56JUEwPFZDnkPnbVyF7tLa4",
  authDomain: "pets--diaries.firebaseapp.com",
  projectId: "pets--diaries",
  storageBucket: "pets--diaries.appspot.com",
  messagingSenderId: "954679174408",
  appId: "1:954679174408:web:cbf851119a71a5f81f78bd",
  measurementId: "G-BKTBMV3M64",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*import { myFunction } from "./lib/index.js";

myFunction();*/

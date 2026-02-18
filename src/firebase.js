import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhY2kKPjAj3ENERbUGeb-UCjmSmtYjgrc",
  authDomain: "aura-auth-website.firebaseapp.com",
  projectId: "aura-auth-website",
  storageBucket: "aura-auth-website.appspot.com",
  messagingSenderId: "940418444442",
  appId: "1:940418444442:web:4055941231816e0be00323",
  measurementId: "G-WDYDC269GX"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {app, auth};
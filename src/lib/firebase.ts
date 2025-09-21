// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-3629149393-d999f",
  "appId": "1:231544293346:web:75decd786470d0459d1bbb",
  "apiKey": "AIzaSyCO009CLp7RKAiJz7bASJOtmKuL60qebxM",
  "authDomain": "studio-3629149393-d999f.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "231544293346"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };

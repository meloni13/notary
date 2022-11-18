// import { initializeApp } from "firebase/app";
const initializeApp = require("firebase/app");
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
const getStorage = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBHojyQV3NIBP2XSpyzo2CuZCukvBqF7zQ",
  authDomain: "digi-notary.firebaseapp.com",
  projectId: "digi-notary",
  storageBucket: "digi-notary.appspot.com",
  messagingSenderId: "71939549673",
  appId: "1:71939549673:web:d07d9d36a47bc24d1b8378",
  measurementId: "G-1PJBY3G0TJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
module.exports.storage = getStorage(app);

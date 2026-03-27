import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuCmLowKHFkRIoCV3evVcoW5JhlBGGHeM",
  authDomain: "july-deaba.firebaseapp.com",
  projectId: "july-deaba",
  storageBucket: "july-deaba.firebasestorage.app",
  messagingSenderId: "906785739941",
  appId: "1:906785739941:web:265392d176eed505fbe94c",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

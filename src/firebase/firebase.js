import { initializeApp } from 'firebase/app';
import { getStorage } from 'firabase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC3XDWVOaVs-LOmkCI8xdbVueJtHrgxHLo",
    authDomain: "complete-clinic.firebaseapp.com",
    projectId: "complete-clinic",
    storageBucket: "complete-clinic.appspot.com",
    messagingSenderId: "568754333915",
    appId: "1:568754333915:web:c3ec048741491e258b44fe"
  };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
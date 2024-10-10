import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Use environment variables for Firebase config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//Exportamos esta referencia para que esté disponible en toda nuestra aplicacion


//###############

/*

const myProducts = [
  { name: "Longines Legend Diver", stock: 100, price: 3800, img: "../public/img/legend-diver.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
  { name: "Longines Spirit Flyback", stock: 120, price: 3800, img: "../public/img/spirit-flyback.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
  { name: "Longines Conquest", stock: 130, price: 3800, img: "../public/img/conquest.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "men" },
  { name: "Longines Pilot Majetek", stock: 10, price: 3800, img: "../public/img/pilot-majetek.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "woman" },
  { name: "Longines Spirit", stock: 110, price: 3800, img: "../public/img/spirit.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "woman" },
  { name: "Longines Zulu Time", stock: 100, price: 3800, img: "../public/img/zulu-time.avif", description: 'Ø 39.00 mm - Automatic Watch - Stainless Steel', idCategory: "woman" },
]

import {collection, doc, writeBatch} from 'firebase/firestore'

const uploadProducts = async() => {
  const batch = writeBatch(db);
  const productsRef = collection(db, 'products');

  myProducts.forEach((product)=>{
    const newDoc = doc(productsRef);
    batch.set(newDoc, product) //agrega la operacion de escritura al batch

  })

  try {
    await batch.commit();
    console.log('Products uploaded successfully')
  } catch (error) {
    console.log('Error uploading products ', error)
  }
}

*/
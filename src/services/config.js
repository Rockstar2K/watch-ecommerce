import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//Estamos trabajando con un objeto con toda nnuestra informacion de la cuenta. Esta incluye la key ersonal de acceso a la BD.
const firebaseConfig = {
    apiKey: "AIzaSyDknKEB0woGOPMGBEXm14wvtzs2zBktcwk",
    authDomain: "watch-ecommerce-pagella.firebaseapp.com",
    projectId: "watch-ecommerce-pagella",
    storageBucket: "watch-ecommerce-pagella.appspot.com",
    messagingSenderId: "306818957341",
    appId: "1:306818957341:web:5febca84b99754fe6d86f4"
  };

//Inicializamos Firebase y se pasa la configuracion como argumento
//Esto retorna una instancia de Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//Exportamos esta referencia para que esté disponible en toda nuestra aplicacion
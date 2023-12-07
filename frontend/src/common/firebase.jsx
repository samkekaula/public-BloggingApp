import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBEYQwJq7Q13p-32I50Mf1aoMUJZ3b7UJw",
  authDomain: "react-blog-website-b5f24.firebaseapp.com",
  projectId: "react-blog-website-b5f24",
  storageBucket: "react-blog-website-b5f24.appspot.com",
  messagingSenderId: "664541518925",
  appId: "1:664541518925:web:be67843371fd73bb12d004"
};

const app = initializeApp(firebaseConfig);

//google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();


export const authWithGoogle = async () =>{
    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) =>{
        user = result.user
    })
    .catch((err) =>{
        console.log(err)
    })

    return user;
}
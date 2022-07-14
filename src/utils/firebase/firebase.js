import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
}from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  collection,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXJw3M7YVg1sTx6Of7gd_s2_BXEK238nM",
  authDomain: "daily-nutrients-calculator.firebaseapp.com",
  projectId: "daily-nutrients-calculator",
  storageBucket: "daily-nutrients-calculator.appspot.com",
  messagingSenderId: "1020445042220",
  appId: "1:1020445042220:web:a92c49c193ccc76afc9389"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const onAuthStateChangedListner = callback => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    },
    reject
    )
  })
}

export const db = getFirestore();

//new user document 생성
export const getUserDescFromAuth = async(userAuth) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    const desc = {
      displayName,
      email,
      createdAt,
    }
    await setDoc(userDocRef, desc , {merge: true})
  }

  return userSnapshot;
}

export const addUserInfo = async(userInfo) => {
  const uid = auth.currentUser?.uid;
  const userDocRef = doc(db, 'users', uid);
  await updateDoc (userDocRef, userInfo);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot;
}

export const addDietDoc = async(intakenFoodDesk) => {
  try{
    const uid = auth.currentUser?.uid;
    const userDocRef = doc(db, 'users', uid);
    const userDietRef = collection(userDocRef, 'diet');
    await addDoc(userDietRef, intakenFoodDesk);
  }catch(error){
    console.log(error)
  }
}

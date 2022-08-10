import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
}from 'firebase/auth';

import {
  query,
  where,
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
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
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

export const addFoodToDocument = async(intakenFoodDesk) => {
  try{
    const uid = auth.currentUser?.uid;
    const userDocRef = doc(db, 'users', uid);
    const today = `${new Date().getFullYear()}, ${new Date().getMonth() + 1}, ${new Date().getDate()}`;
    const createdAt = new Date(today);
    const userDietRef = collection(userDocRef, 'diet');
    const q = query(userDietRef, where("createdAt", "==", createdAt))
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs;
    const foodData = { intakenFoodDesk, createdAt }
    console.log(data);
    if(data.length === 0){
      await addDoc(userDietRef, foodData);
    }else{
      const docId = data[0].id;
      const dietDocRef = doc(userDietRef, docId);
      await setDoc( dietDocRef, foodData, {merge: true});
    }
  }catch(error){
    console.log(error)
  }
}

export const signOutUser = async () => await signOut(auth);

export const getDietPerMonth = async(year, month) => {
  try{
    const uid = auth.currentUser?.uid;
    const userDocRef = doc(db, 'users', uid);
    const userDietRef = collection(userDocRef, 'diet');
    const firstDay = new Date(year, month);
    const lastDay = new Date(year, month + 1, 0);
    const q = query(userDietRef, where("createdAt", ">=", firstDay), where("createdAt", "<=", lastDay) )
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({...doc.data()}))
  }catch(error){
    console.log(error)
  }
}
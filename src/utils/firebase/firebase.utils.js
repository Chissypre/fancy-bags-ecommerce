import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5isUoTr3I2lphSGLQ7iUfIbvjNeVRsPY",
  authDomain: "fancy-bags-ecommerce.firebaseapp.com",
  projectId: "fancy-bags-ecommerce",
  storageBucket: "fancy-bags-ecommerce.appspot.com",
  messagingSenderId: "875454586553",
  appId: "1:875454586553:web:6a10ea93167867efb98568"
};


const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp );

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//TO ADD DATABASE TO FIRESTORE DATABASE
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) =>{
const collectionRef = collection(db, collectionKey)
const batch =writeBatch(db)
objectsToAdd.forEach((object) => {
  const docRef = doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef, object);
});

await batch.commit();
console.log('done');
};

//TO GET DATA FROM ALREADY ADDED DATABASE ON FIREBASE DATABASE
export const getProductsAndDocuments = async () => {
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const collectionMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return collectionMap;
}



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
import { createContext, useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import { getDoc } from 'firebase/firestore';
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

 
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        
        if (user.displayName) {
          setCurrentUser(user);
        } else {
         
          const userDocRef = await createUserDocumentFromAuth(user);
          console.log(userDocRef)
          try {
            const userSnapshot = await getDoc(userDocRef);
            
            if (userSnapshot.exists) {
              const userData = userSnapshot.data();
              
              setCurrentUser(userData)
            } else {
              console.log('Document does not exist.');
            }
          } catch (error) {
            console.error('Error getting user document:', error);
          }
        }
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
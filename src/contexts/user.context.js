import { createContext, useReducer, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import { getDoc } from 'firebase/firestore';

const initialState = {
  currentUser: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    case 'CLEAR_CURRENT_USER':
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);

        if (user.displayName) {
          dispatch({ type: 'SET_CURRENT_USER', payload: user });
        } else {
          // GET USER FROM FIRESTORE DATABASE
          const userDocRef = await createUserDocumentFromAuth(user);
          try {
            const userSnapshot = await getDoc(userDocRef);
            console.log(userSnapshot)

           
            if (userSnapshot.exists) {
              const userData = userSnapshot.data();
              console.log(userData)

              dispatch({ type: 'SET_CURRENT_USER', payload: userData });
            } else {
              console.log('Document does not exist.');
            }
          } catch (error) {
            console.error('Error getting user document:', error);
          }
        }
      } else {
        dispatch({ type: 'CLEAR_CURRENT_USER' });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>
  );
};

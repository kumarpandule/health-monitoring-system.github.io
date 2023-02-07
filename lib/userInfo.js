import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import { auth } from '@lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [userType, setUserType] = useState(null);
  const router = useRouter()

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    let userData;
    setIsUserLoading(true)

    if (user) {
      // const ref = firestore.collection('users').doc(user.uid);
      const ref = doc(getFirestore(), 'users', user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setUserType(doc.data()?.type);
      });
      userData = onSnapshot(ref, (doc) => {
        setCurrentUser(doc.data());
      });
      setIsUserLoading(false)
    } else {
      setUserType(false)
      setUserType(null);
    }
    return unsubscribe, userData;
  }, [user]);

  return { user, currentUser, userType, isUserLoading};
}
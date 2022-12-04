import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import { auth, firestore } from '@lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [currentUser, setUsername] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    setIsUserLoading(true)

    if (user) {
      // const ref = firestore.collection('users').doc(user.uid);
      const ref = doc(getFirestore(), 'doctors', user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data());
        setIsUserLoading(false)
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, currentUser, isUserLoading};
}
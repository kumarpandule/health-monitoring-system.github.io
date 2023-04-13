import { doc, onSnapshot, getFirestore, getDocs, getDoc } from 'firebase/firestore';
import { auth, db } from '@lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    let userData;
    setIsUserLoading(true)

    const getUserRole = async () => {
      if (user) {
        try{
          const ref = doc(db, 'users', user.uid);
          const refSpan = await getDoc(ref);
          if(refSpan.exists()){
            unsubscribe = onSnapshot(ref, (doc) => {
              setUserRole(doc.data()?.role);
            });
            userData = onSnapshot(ref, (doc) => {
              setCurrentUser(doc.data());
            });
            setIsUserLoading(false)
          }else {
            const ref = doc(db, 'patients', user.phoneNumber);
            unsubscribe = onSnapshot(ref, (doc) => {
              setUserRole(doc.data()?.role);
            });
            userData = onSnapshot(ref, (doc) => {
              setCurrentUser(doc.data());
            });
            setIsUserLoading(false)
          }
        } catch(error){
            toast.error(error.message);
        }
      } else {
        setUserRole(false)
        setUserRole(null);
      }
    } 
    getUserRole();
    return unsubscribe, userData;
  }, [user]);

  return { user, currentUser, userRole, isUserLoading};
}
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDBKubwqUBiiOrapLr-_Rr_dA24Z_fw7yU",
  authDomain: "health-monitoring-system-7885c.firebaseapp.com",
  projectId: "health-monitoring-system-7885c",
  storageBucket: "health-monitoring-system-7885c.appspot.com",
  messagingSenderId: "488459224908",
  appId: "1:488459224908:web:5147e63edbdf45504d71e9",
  measurementId: "G-3DMC0WV2M5"
  };

  function createFirebaseApp(config){
    try{
        return getApp();
    }
    catch{
        return initializeApp(config);
    }
  }

  const firebaseApp = createFirebaseApp(firebaseConfig);

  //   Auth exports
  export const auth = getAuth(firebaseApp);

  //   Firestore exports
  export const db = getFirestore(firebaseApp);

  //   Storage exports
  export const storage = getStorage(firebaseApp);
  export const STATE_CHANGED = 'state_changed';


  /**`
   * Converts a firestore document to JSON
   * @param  {DocumentSnapshot} doc
   */
  export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data,
      // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
      createdAt: data?.createdAt.toMillis() || 0,
      updatedAt: data?.updatedAt.toMillis() || 0,
    };
  }
  
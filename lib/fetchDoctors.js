import {useState, useEffect} from 'react'
import { doc, getDocs, collection, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import toast from 'react-hot-toast'

export default function FetchDoctors(props) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
      setLoading(true)
      const collectionRef = collection(db, 'doctors')
      onSnapshot(collectionRef, (snapshot) => {
        let docts = []
        snapshot.docs.map((doc) => {
         docts.push({ ...doc.data(), id: doc.id})
        })
        setDoctors(docts)
        setLoading(false)
      })
    }, [])


  return {loading, error, doctors}
}

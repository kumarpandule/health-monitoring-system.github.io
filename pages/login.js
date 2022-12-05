import React, { useContext, useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@lib/firebase';
import { UserContext } from '@lib/context';


export default function Login(props) {
    const { user, currentUser} = useContext(UserContext);

    return (
      <>
      { user ? <SignOut /> : <SignIn /> }
      </>
    );
  }




  function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { user, currentUser} = useContext(UserContext);
    function clearValues(){
      setEmail('')
      setPassword('')
      return
    }

    const onChange = (e) => {
      setIsLoading(false)
    }

   async function submitHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            setIsLoading(false)
            return
        }
       setIsLoading(true)
       await signInWithEmailAndPassword(auth, email, password)
        .then()
        .catch((error) => {
          setError(error.message)
          clearValues()
          setIsLoading(false)
          toast.error(error.message)
        }).finally(() => user ? Router.push('/admin') : setIsLoading(false))
    }

    return (
      <div className=" container flex flex-col h-full justify-center mt-8 md:mt-24 items-center md:flex-row bg-gray-100 dark:bg-gray-900">
      <div className="flex w-full basis-1/2 justify-center">
        <img className=" md:w-1/2 w-4/5" src="/Authentication.svg"></img>
      </div>
      <div className="mx-auto w-24 h-1 md:w-1 md:h-24 my-6 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
      <div className="flex h-1/2 justify-center md:justify-start md:ml-16 basis-1/2">
        <div className="flex w-screen pt-2 px-4 md:py-4 md:w-3/4 h-96 flex-col justify-between items-center">
          <h1 className=" font-extrabold text-gray6 dark:text-gray2 select-none text-2xl sm:text-4xl">
            Login
          </h1>

          {/* Error Messege */}
          {error && (
            <div className=" text-sm w-full border-red-500 border text-center border-solid text-red-500 py-2">
              {error}
            </div>
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => {
              onChange()
              setEmail(e.target.value)}}
            placeholder="Email Address"
            className="input-field"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button
            onClick={submitHandler}
            className="w-full flex justify-center py-2 duration-300 relative after:absolute after:top-0 after:right-full bg-green-500 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
                  {(isLoading) && (
                      <FaSpinner className=' animate-spin text-white' size={22}/>

                  )} 
                  {(!isLoading) && (
                    <span className="text-gray1 cursor-pointer">Login</span>
                  )}
          </button>
          <div className="py-6"></div>
        </div>
      </div>
    </div>
    );
  }


  function SignOut(){
    const router = useRouter();
    const SignOutNow = () => {
      signOut(auth);
      router.reload();
    }

    return(
        <div className=" h-screen bg-gray-100 dark:bg-gray-900">
        <div className='container prose dark:prose-invert md:prose-lg lg:prose-xl sm:prose-sm'>
        <header className="text-center pt-20 ">
         <article>
         <h1>Welcome <span className='gradient-text'>Admin</span></h1>
          <p>
            You already sign in in this system.
          </p>
          <h2>Go to Dashboard</h2>
          <Link href="/admin" className="btn btn-green btn-glow">Your Dashboard!</Link>
          <a className='px-4'>Or</a>
          <button className='btn btn-red' onClick={SignOutNow}>Sign Out</button>
         </article>
        </header>
        </div>
      </div>
    );
  }
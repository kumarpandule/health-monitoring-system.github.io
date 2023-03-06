import React from 'react'
import { UserContext } from "@lib/context";
import { useContext } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "@lib/firebase";
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import Dashboard from './dashboard';
import dynamic from 'next/dynamic';

const AuthCheck = dynamic(() => import("@components/AuthCheck"), {ssr: false});

export default function Doctor() {
  const {userType, isUserLoading} = useContext(UserContext);
  const router = useRouter();
  const SignOutNow = () => {
    signOut(auth);
    router.push('/login');
  }

  return (
    <>
    { !isUserLoading ? (
    <AuthCheck>
      { !userType ?
      (
        <Dashboard />
        )
      :
       (
        <div className=" h-screen bg-gray-100 dark:bg-gray-900">
        <div className='container prose dark:prose-invert md:prose-lg lg:prose-xl sm:prose-sm'>
        <header className="text-center pt-20 ">
         <article>
         <h1>You Don{"'"}t Have <span className='gradient-text'>Access!</span></h1>
          <p>
            Admin dashboard can only accessed by Legitimate Doctor.
          </p>
          <h2>Go to Dashboard</h2>
          <Link href="/login" className="btn btn-green btn-glow">Your Dashboard!</Link>
          <a className='px-4'>Or</a>
          <button className='btn btn-red' onClick={SignOutNow}>Sign Out</button>
         </article>
        </header>
        </div>
      </div>
     )}
    </AuthCheck>
    )
  :(
    <main className="h-full w-full flex items-center justify-center object-center align-middle">
      <FaSpinner className=' animate-spin text-green-500 text-center object-center align-middle' size={40}/>
    </main>
  )
  }
  </>
  );
}

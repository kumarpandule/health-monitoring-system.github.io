import { auth, firestore, googleAuthProvider } from '@lib/firebase';
import { doc, writeBatch, getDoc, getFirestore } from 'firebase/firestore';
import { signInWithPopup, signInAnonymously, signOut } from 'firebase/auth';
import { UserContext } from '@lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';



export default function LoginPage(props) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
      {user ? !username ? <UsernameForm /> : <SignOut user={user}/> : <SignIn />}
    </main>
  );
}

  //   Sign In
  function SignIn() {
    const signInWithGoogle = async () => {
      await signInWithPopup(auth, googleAuthProvider)
    };

    return (
      <>
      <div class="flex flex-col h-screen justify-center items-center md:flex-row bg-gray-100 dark:bg-gray-900">
        <div class="flex basis-1/2 justify-center">
          <img className=' w-1/2' src="/Authentication.svg"></img>
        </div>

        <div class="flex justify-center md:justify-start md:ml-16 basis-1/2">
          <form class="flex flex-col justify-center md:justify-start w-3/4 md:w-1/2">
            <div className="flex justify-center pb-6">
              <img src="/hacker.png" class="w-1/5 object-center"></img>
            </div>
            <div className=" prose lg:prose-lg">
              <div className="flex justify-center">
                <h1>Welcome</h1>
              </div>

              {/* Login  creadientals */}
              
              <h5>Username</h5>
              <input
                class="bg-gray7 bg-opacity-30 text-white text-lg block py-2 px-1 w-full border-b-4 border-b-white border-t-0 border-r-0 border-l-0 rounded-none outline-none focus-visible:outline-none"
                type="email" name="email">
                </input>

              <h5>Password</h5>
              <input
                type="password"
                class="bg-gray7 bg-opacity-30 text-white text-lg block py-2 px-1 w-full border-b-4 border-b-white border-t-0 border-r-0 border-l-0 rounded-none outline-none focus-visible:outline-none">
                </input>

              <a href="#" class="py-2">
                Forgot Password?
              </a>
              <div>
              <input
                type="submit"
                class="btn btn-blue btn-glow" value="Login">
                </input>
                </div>

              <h5>Or with account:</h5>
              <a className="btn flex flex-row justify-center text-center items-center h-12" onClick={signInWithGoogle}><img src="/google.png" className="w-8 mr-4"></img>
              Sign in with Google 
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
    );
  }



  // Sign out
  function SignOut({user}) {
    // return <button onClick={() => signOut(auth)}>Sign Out</button>;

    return (
      <main className=" h-screen bg-gray-100 dark:bg-gray-900">
        <div className='container prose dark:prose-invert '>
        <header class="text-center mb-8 pt-20">
          <h1 class="text-5xl mb-1">Welcome <span className='gradient-text'>User</span></h1>
          <p class="my-0 text-gray3">
            You already sign in in this system.
          </p>
          <h2 class="text-lg mb-1">Go to Dashboard</h2>
          <a href="/admin" className="btn btn-green btn-glow">Your Dashboard!</a>
          <a className=' px-6'>Or</a>
          <button className='btn btn-red' onClick={() => signOut(auth)}>Sign Out</button>
        </header>
        </div>
      </main>
    );
  }


  //   Username Form
  function UsernameForm(){
    return null;
  }
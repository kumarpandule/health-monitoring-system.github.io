import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext, UserContext } from '@lib/context';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { user, currentUser } = useContext(UserContext);

  return user ? props.children : props.fallback || <YouMustSignIn />
}


function YouMustSignIn(){
  return (
    <main className=" h-screen bg-gray-100 dark:bg-gray-900">
    <div className='container prose dark:prose-invert md:prose-lg lg:prose-lg sm:prose-sm'>
    <header className="text-center mb-8 pt-20">
      <h1 >You need to Sign In First!</h1>
      <h2 >Go to Login page</h2>
      <Link className='btn btn-green' href="/login">You must be signed in</Link>
    </header>
    </div>
  </main>
  );
}
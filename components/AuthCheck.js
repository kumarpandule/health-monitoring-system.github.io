import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '@lib/context';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { username } = useContext(UserContext);

  return username ? props.children : props.fallback || <YouMustSignIn />
}


function YouMustSignIn(){
  return (
    <main className=" h-screen bg-gray-100 dark:bg-gray-900">
    <div className='container prose dark:prose-invert '>
    <header class="text-center mb-8 pt-20">
      <h1 class="text-5xl mb-1">You need sign out First!</h1>
      <h2 class="text-lg mb-1">Go to Login page</h2>
      <Link className='btn btn-green' href="/login">You must be signed in</Link>
    </header>
    </div>
  </main>
  );
}
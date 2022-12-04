import Link from 'next/link';
import { useRouter } from 'next/router';
import useDarkMode from '@lib/useDarkMode';
import React, { useContext } from 'react';
import { FaHome, FaExclamationCircle, FaSignOutAlt,FaSun, FaMoon } from 'react-icons/fa';
import { UserContext } from '@lib/context';
import { signOut } from 'firebase/auth';
import { auth } from '@lib/firebase';


export default function Navbar() {
  const router = useRouter();
  const {user, currentUser} = useContext(UserContext);

  const SignOutNow = () => {
    signOut(auth);
    router.reload();
  } 


  return (
    <nav className="flex top-0 left-0 w-full md:px-24 px-6 py-2 justify-between items-center shadow-lg bg-gray-200 dark:bg-gray-800">
        <Link href="./" className="flex items-center">
          <img src="/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <Link href="/" className="top-navigation-icon"><FaHome size={34} /></Link>
            <Link href="/about" className="top-navigation-icon"><FaExclamationCircle size={34} /></Link>
        </div>

        <div className="flex flex-row items-center md:order-2">
          <ThemeIcon />

          {/* user is signed-in and has username */}
        {user && (
          <>
              <button className=' top-navigation-icon' onClick={SignOutNow} ><FaSignOutAlt size={30}/></button>
              <Link href={`/admin`}>
                <img src='/hacker.png' className="w-10 h-10 rounded-full" />
              </Link>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!user && (
          <Link href='/login'>
            <button className="md:inline-block px-4 py-2 text-xl font-display text-black hover:text-white bg-white hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300">Login</button>
            </Link>
        )}

        </div>
    </nav>
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div onClick={handleMode}>
      {!darkTheme ? 
        <FaMoon size='28' className='top-navigation-icon' />
       : 
        <FaSun size='28' className='top-navigation-icon' />
      }
    </div>
  );
};

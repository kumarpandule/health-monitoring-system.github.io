import { FaHome, FaExclamationCircle, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';
import { signOut } from 'firebase/auth';
import useDarkMode from '@lib/useDarkMode';


export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOutNow = () => {
    signOut(auth);
    router.reload();
  }


  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="./" className="flex items-center">
          <img src="/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <a href="/" className="top-navigation-icon"><FaHome size={34} /></a>
            <a href="/about" className="top-navigation-icon"><FaExclamationCircle size={34} /></a>
        </div>

        <div className="flex flex-row items-center md:order-2">
          <ThemeIcon />
          {/* <button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <img className="w-10 h-10 rounded-full" src="/hacker.png" alt="user photo" />
          </button> */}

                  {/* user is signed-in and has username */}
        {username && (
          <>
              <button className='block px-2 py-2 pr-4 text-sm text-gray6 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-blue-600 font-bold leading-none gradient-slide' onClick={signOutNow}><FaSignOutAlt size={30}/></button>
            {/* <li>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li> */}
              <Link href={`/admin`}>
                <img src={user?.photoURL || '/hacker.png'} className="w-10 h-10 rounded-full" />
              </Link>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
            <button class="md:inline-block px-4 py-2 text-xl font-display text-black hover:text-white bg-white hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300"><a href='/login'>Login</a></button>
        )}

        </div>
      </div>
    </nav>
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='28' className='top-navigation-icon' />
      ) : (
        <FaMoon size='28' className='top-navigation-icon' />
      )}
    </span>
  );
};

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { FaHome, FaExclamationCircle, FaSignOutAlt,FaSun, FaMoon, FaList } from 'react-icons/fa';
import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';


export default function Navbar(props) {
  const router = useRouter();
  const { user , currentUser} = useContext(UserContext);

  const logout = () => {
    auth.signOut();
    router.push('/login')
  }

  return (
    <nav className="flex top-0 left-0 w-full md:px-24 px-4 py-2 justify-between items-center shadow-lg bg-gray-200 dark:bg-gray-800">
         <div className='flex flex-row items-center w-8 md:w-12 h-6 md:h-9 mr-3'>
        <Link href="./" className="flex items-center">
          <img src={'https://firebasestorage.googleapis.com/v0/b/health-monitoring-system-7885c.appspot.com/o/Images%2FLogo.svg?alt=media&token=cf99c988-5408-49a1-b371-60263e65bd30' || '/Logo.svg'} alt={'Logo'}/>
        </Link>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <Link href="/" className="top-navigation-icon"><FaHome size={32}/></Link>
            <Link href="/about" className="top-navigation-icon"><FaExclamationCircle size={32} /></Link>
        </div>

        <div className="flex flex-row items-center md:order-2">
          {/* <ThemeIcon /> */}

          {/* user is signed-in and has username */}
        {user && (
          <>
              <button className=' top-navigation-icon' onClick={logout} ><FaSignOutAlt size={30}/></button>
              <Link href={`/login`}>
                <img src={currentUser?.img || '/hacker.png'}  className=" w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 p-0.5 ring-green-600" alt="Bordered avatar" />
              </Link>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!user && (
          <Link href='/login'>
            <button className="md:inline-block px-4 py-2 text-sm md:text-xl font-display text-black hover:text-white bg-white hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300">Login</button>
            </Link>
        )}

        </div>
    </nav>
  );
}

// const ThemeIcon = () => {
//   const [colorTheme, setTheme] = useDarkMode();
//   return (
//     <div>
//       {colorTheme === "light" ? (
//         <FaSun onClick={() => setTheme("light")} color='orange' size='28' className='top-navigation-icon' />
//       )
//        : 
//       (
//         <FaMoon onClick={() => setTheme("dark")} size='28' className='top-navigation-icon' />
//       )}
//     </div>
//   );
// };

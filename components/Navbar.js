import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { UserContext } from '@lib/context';
import { auth } from '@lib/firebase';

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const signOut =  () => {
    auth.signOut();
    router.reload();
  }

  return (
    <header>
      <a className='small-logo' href="/"><img src="/logo.svg" alt="logo" /></a>

      <nav className='sm:hidden'>
                <ul class="nav__links">
                    <li><a href="/enter">Dashboard</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
    <div className='nav__links'> 
        {/* user is signed-in and has username */}
        {username && (
          <>
            <div className="push-left">
              <button onClick={signOut}><a href='/'>Sign Out</a></button>
            </div>

            {/* Write Posts */}
            {/* <div>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </div> */}
            <div>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || '/hacker.png'} />
              </Link>
            </div>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <div>
            <Link href="/enter">
            <button class="relative hidden md:inline-block px-4 py-2 text-xl font-display text-black hover:text-white bg-white 
                 hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300">Log in</button>
            </Link>
          </div>
        )}
        </div>

        {/* Mobile View Functions */}
        <div className="mr-10 flex md:hidden">
          <button onClick={() => setIsOpen(isOpen)} 
          type= "button"
          aria-controls='mobile-menu'
          aria-expanded='false'
          ><h3>Menu</h3></button>
        </div>
    </header>
  );
}




// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useContext } from 'react';
// import { UserContext } from '@lib/context';
// import { auth } from '@lib/firebase';

// // Top navbar
// export default function Navbar() {
//   const { user, username } = useContext(UserContext);

//   const router = useRouter();

//   const signOut =  () => {
//     auth.signOut();
//     router.reload();
//   }

//   return (
//     <nav class="navbar">
//       <ul>
//         <li>
//           <Link href="/">
//             <img src='/Logo.svg'></img>
//           </Link>
//         </li>

//         {/* user is signed-in and has username */}
//         {username && (
//           <>
//             <li className="push-left">
//               <a href="/" onClick={signOut()} class="font-sans text-xl font-bold leading-none text-gray6 gradient-slide">Logout</a>
//             </li>
//             <li>
//               <Link href="/admin">
//               <a class="font-sans text-xl px-4 font-bold leading-none text-gray6 hover:text-blue-300">Dashboard</a>
//               </Link>
//             </li>
//             <li>
//               <Link href={`/${username}`}>
//                 <img src={user?.photoURL || '/hacker.png'} />
//               </Link>
//             </li>
//           </>
//         )}

//         {/* user is not signed OR has not created username */}
//         {!username && (
//           <li>
//             <Link href="/enter">
//               <button class="relative hidden md:inline-block px-4 py-2 text-xl font-display text-black hover:text-white bg-white 
//                 hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300">Log in</button>
//             </Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

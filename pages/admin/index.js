import AdminSidebar from "@components/AdminSidebar";
import AuthCheck from "@components/AuthCheck";
import { UserContext } from "@lib/context";
import { useContext } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "@lib/firebase";
import { FaSpinner } from 'react-icons/fa';

export default function Admin(props) {
  const {user, currentUser, isUserLoading} = useContext(UserContext);
  const router = useRouter();
  const SignOutNow = () => {
    signOut(auth);
    router.reload();
  }

  return (
    <AuthCheck>
      <AdminSidebar>
        <div className=" container text-center flex prose dark:prose-invert md:prose-lg lg:prose-lg sm:prose-sm flex-col w-full">
            <h2 className=" font-bold">Welcome Doctor</h2>
            <div className="mx-auto w-24 h-1 my-4 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>

          <div className="mt-4">
          <div className="w-full px-4 overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800">
          <div className="flex flex-col md:flex-row">

          <div className="basis-1/2">
          <div className=" flex h-full items-center justify-center py-4">
              <img src="/hacker.png" className=" object-center my-auto w-1/3 p-4 rounded-full ring-4 ring-green-600" alt="Bordered avatar">
              </img>
            </div>
          </div>

          <div className="basis-1/2 w-full">
            {(isUserLoading) && (
              <FaSpinner className=' my-40 animate-spin text-blue-500' size={40}/>
            )}
            {(!isUserLoading) && (
          <article className="flex flex-col w-auto text-start">
              <p>
              User ID:{" "}
              <span>{currentUser?.uid}</span>
            </p>
            <p>
              Name:{" "}
              <span>
                {currentUser?.name}
              </span>
            </p>
            <p>
              Account Email:{" "}
              <span>{currentUser?.email}</span>
            </p>
            <p>
              Phone Number:{" "}
              <span>
                {currentUser?.number}
              </span>
            </p>
            <p>
              Address:{" "}
              <span>
                {currentUser?.address}
              </span>
            </p>
            <button className="btn btn-red w-1/2 mb-4 text-center flex justify-center" onClick={SignOutNow}>
              <span>Sign Out</span>
              </button>
              </article>
              )}
          </div>
        </div>
            </div>
            </div>
            
            {/* <h2 className="text-5xl pt-4 text-center prose dark:prose-invert">Manage account</h2>
            <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div> */}
        </div>
      </AdminSidebar>
    </AuthCheck>
  );
}
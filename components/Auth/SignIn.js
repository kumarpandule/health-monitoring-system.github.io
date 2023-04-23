import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@lib/firebase';
import Footer from 'pages/footer';
import PatientLoginPage from '@components/Auth/PatientLogin';


export default function SignIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  function clearValues() {
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
      }).finally(() => clearValues())
  }

  return (
    <main className=' bg-gray-100 dark:bg-gray-900'>
      <div className='container h-screen flex flex-col justify-between'>
        <div className=" container h-auto flex flex-col justify-center mb-28 mt-8 md:mt-24 items-center md:flex-row bg-gray-100 dark:bg-gray-900">
          <div className="flex w-full basis-1/2 justify-center">
            <img className=" md:w-1/2 w-4/5" src={'https://firebasestorage.googleapis.com/v0/b/health-monitoring-system-7885c.appspot.com/o/Images%2FAuthentication.svg?alt=media&token=8d65efd8-f611-461b-963d-9da88ebe05eb' || '/Authentication.svg'} alt="Authentication" />
          </div>
          <div className="mx-auto w-24 h-1 md:w-1 md:h-24 my-6 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
          <div className="flex flex-col w-full  h-1/2 justify-center items-center md:justify-start md:items-start md:ml-16 basis-1/2">
          <div className=' w-3/4'>
           { isAdminLogin ? (
                        <div className="flex w-full pt-2 px-4 md:py-4 h-96 flex-col justify-between items-center">
                        <h1 className=" font-extrabold text-gray6 dark:text-gray2 select-none text-2xl sm:text-4xl">
                          Doctor / Admin Login
                        </h1>
                        <p className='text-center text-gray-500'>Doctor should be login with there registred Email ID & Password.</p>
                        {/* Error Messege */}
                        {error && (
                          <div className=" text-sm w-full border-red-500 border text-center border-solid text-red-500 py-2">
                            {error}
                          </div>
                        )}
                        <input
                          type="text"
                          value={email}
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              submitHandler()
                          }}
                          onChange={(e) => {
                            onChange()
                            setEmail(e.target.value)
                          }}
                          placeholder="Email Address"
                          className="input-field"
                        />
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              submitHandler()
                          }}
                          type="password"
                          placeholder="Password"
                          className="input-field"
                        />
                        <button
                          onClick={submitHandler}
                          className="w-full flex justify-center py-2 duration-300 relative after:absolute after:top-0 after:right-full bg-green-500 hover:bg-green-700 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
                          {(isLoading) && (
                            <FaSpinner className=' animate-spin text-white' size={22} />
          
                          )}
                          {(!isLoading) && (
                            <span className="text-gray1 cursor-pointer">Login</span>
                          )}
                        </button>
                      </div>)
                      : 
                      <PatientLoginPage />
                      }
            <p className="text-gray-500 text-center">Are you a <button className=" text-blue-500" onClick={() => setIsAdminLogin(!isAdminLogin)}>{!isAdminLogin ? 'Doctor / Admin!' : 'Patient!'}</button></p>
          </div>
          </div>
        </div>
        <div className=' mx-auto prose dark:prose-invert prose-base md:prose-lg'>
        <h2 className="text-center md:text-left">How patient can login? </h2>
      <p>Patient should enter their mobile number to login With OTP authorization.</p>
      <h2 className="text-center md:text-left">Please authorize your number first!</h2>
      <p>This message means you dont have account yet in this system! Please visit your associated doctor and get your account set up. Get your mobile number linked to the account.</p>
      <h2 className="text-center md:text-left">How Doctor or Admin can login? </h2>
      <p>Doctor & Admin can login through their valid email ID And Password associated with their account.</p>
      </div>
      </div>
      <Footer />
    </main>
  );
}
import AdminSidebar from '@components/AdminSidebar'
import AuthCheck from '@components/AuthCheck'
import PatientCard from '@components/PatientCard'
import { doc, getFirestore } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { FaSpinner, FaAngleRight, FaUserAlt } from 'react-icons/fa';

function PatientView(props) {
  return (
    <AuthCheck>
        <AdminSidebar>
            <ViewPatient />
        </AdminSidebar>
    </AuthCheck>
  )
}
export default PatientView

function ViewPatient(){
    const loading = useState();
    const router = useRouter();
    const {slug} = router.query;

    const profileRef = doc(getFirestore(), 'patients', slug);
    const [profile] = useDocumentDataOnce(profileRef);

    return (
        <>
        {(profile) && (
            <>
          <div className=" flex flex-row justify-start items-center text-blue-500">
          <Link href={'/admin/patients'}>
          <p>Patients</p>
          </Link>
          <FaAngleRight size={18} className=' pt-1' />
          <p>{profile.firstName+' '+ profile.lastName}</p> 
          <FaAngleRight size={18} className=' pt-1' />
        </div>

            <div className="md:mx-4 text-gray1">
              <div className=' flex flex-row w-full h-auto rounded-lg shadow-xs bg-blue-500 overflow-x-auto my-2 p-2 md:p-4'>
                <div className=' basis-1/2 flex flex-col'>
                  <h1>Track Patient{"'"}s Health <span className='text-green-500'>Live</span></h1>
                </div>
                <div className='basis-1/2 flex justify-end pr-10'>
                 <FaAngleRight size={22} />
                </div>
              </div>
            </div>

        {/* Patient View */}
        <div className='text-gray-500  dark:text-gray-400'>
          <div className="md:mx-4">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className=" basis-1/2 overflow-hidden ">
              <h1 className="prose font-bold py-2 dark:text-gray1">Patient Details</h1>
                <div className='rounded-lg shadow-xs bg-white dark:bg-gray-800 overflow-x-auto my-2 p-2 md:p-4'>
                 <div className='flex flex-col w-full h-auto'>
                 <div className='flex flex-row w-auto '>
                 <div className=" m-auto"><FaUserAlt size={80} className=' p-2 m-2 rounded-full ring-4 ring-green-400 text-blue-400' /></div>
                 <div className='flex flex-col w-full mx-10 py-4'>
                 <p>Name{" "}:{" "}<span>{profile.firstName+' '+profile.middleName+' '+profile.lastName}</span></p>
                 <div className='flex flex-row justify-between py-2'>
                 <p>Gender{" "}:{" "}<span>{profile.gender}</span></p>
                 <p>Age{" "}:{" "}<span>{profile.age}</span></p>
                 <p>Marital Status{" "}:{" "}<span>{profile.maritalStatus}</span></p>
                 </div>
                 <div className='flex flex-row justify-between py-2 text-blue-400'>
                 <p>Blood Group{" "}:{" "}<span>{profile.bloodGroup}</span></p>
                 <p>Height{" "}:{" "}<span>{profile.height}</span></p>
                 <p>Weight{" "}:{" "}<span>{profile.weight}</span></p>
                 </div>
                 </div>
                 </div>
                 <hr className=" md:mx-4 my-2 bg-gray-200 dark:bg-gray-800 border border-blue-400 dark:border-blue-400 rounded-full " />
                 <div className='flex flex-col h-auto w-auto mx-4 py-2'>
                 <p>Contact No{" "}:{" "}<span>{profile.number}</span></p>
                 <div className='flex flex-row w-auto'>
                 <p>Address</p>
                 <span className='mx-2'>{":"+" "}{profile.address}</span>
                 </div>
                 </div>
                 <hr className=" md:mx-4 my-2 bg-gray-200 dark:bg-gray-800 border border-blue-400 dark:border-blue-400 rounded-full " />
                 <div className='flex flex-row w-auto mx-4'>
                 <p>Previous Hospitality Status</p>
                 <div className='flex flex-col h-auto w-auto mx-2 py-1'>
                 <span className='mx-2'>{":"+" "+"Deenanath Mangeshkar Hospital - Pune"}</span>
                 <p className='px-4'>on 24 Jan 2023</p>
                 </div>
                 </div>
                 </div>
                </div>
              </div>
              <div className=" basis-2/5 overflow-hidden">
              <h1 className="prose font-bold py-2 dark:text-gray1">Medical History</h1>
                <div className='rounded-lg shadow-xs bg-white dark:bg-gray-800 overflow-x-auto my-4 md:my-4 p-2 md:p-4'>
                <div className='flex flex-col w-full h-auto gap-2 justify-start md:px-4'>
                 <div className='flex flex-row w-auto h-auto gap-10'>
                 <p>Diabetes status{" "}:{" "}<span>NO</span></p>
                 <p>Cardiac History{" "}:{" "}<span>NO</span></p>
                 </div>
                 <div className='flex flex-row w-auto h-auto gap-10'>
                 <p>Surgical History{" "}:{" "}<span>NO</span></p>
                 <p>Any Fall Incidance{" "}:{" "}<span>NO</span></p>
                 </div>
                 <div className='flex flex-row w-auto h-auto gap-10'>
                 <p>Neuro-Logical History{" "}:{" "}<span>NO</span></p>
                 <p>Neuro-Logical History{" "}:{" "}<span>NO</span></p>
                 </div>
                 </div>
                 <hr className=" md:mx-4 my-2 bg-gray-200 dark:bg-gray-800 border border-blue-400 dark:border-blue-400 rounded-full " />
                </div>
                <h1 className="prose font-bold py-2 dark:text-gray1">Other History</h1>
                <div className='rounded-lg shadow-xs bg-white dark:bg-gray-800 overflow-x-auto p-2 md:p-4'>
                <div className='flex flex-col w-full h-auto gap-2 justify-start md:px-4'>
                 <div className='flex flex-row w-auto h-auto gap-10'>
                 <p>History Not Found!<span></span></p>
                 </div>
                 </div>
                 <hr className=" md:mx-4 my-2 bg-gray-200 dark:bg-gray-800 border border-blue-400 dark:border-blue-400 rounded-full " />
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Patient Reports */}
            <div>
              <h1 className="prose lg:prose-lg font-bold md:ml-4 py-2 dark:text-gray1">
                All Reports
              </h1>
              <div className="md:mx-4">
                <div className="w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800">
                  <div className="w-full overflow-x-auto p-2 md:p-4">

                    <table className="w-full">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                          <th className="px-4 py-3">Patients</th>
                          <th className="pr-4 py-3">Location</th>
                          <th className="px-4 py-3">ID</th>
                          <th className="px-4 py-3">Identy</th>
                          <th className="px-4 py-3">Edit</th>
                        </tr>
                      </thead>
                      {(loading) && (
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td><FaSpinner className=' my-40 animate-spin text-blue-500' size={40} /></td>
                          </tr>
                        </tbody>
                      )}

                      {(!loading) && (
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                          {patients.map(patient => (
                            <tr key={patient.id} onClick={() => router.push(`/admin/patients/${patient.id}`)} className=" w-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400 cursor-pointer">
                              <PatientCard name={patient.firstName + ' ' + patient.middleName + ' ' + patient.lastName} number={patient.number} city={patient.city} uid={patient.id} aadhar={patient.aadhar} />
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </>
        )}
        </>
    );
}
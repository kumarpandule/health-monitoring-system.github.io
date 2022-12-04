import AuthCheck from "@components/AuthCheck";
import AdminSidebar from "@components/AdminSidebar";
import FetchDoctors from "@lib/FetchDoctors";
import AddDoctor from "@lib/addDoctor";
import DoctorCard from "@components/DoctorCard";
import { FaSpinner } from 'react-icons/fa';
import { UserContext } from "@lib/context";
import { useContext } from "react";

export default function Doctors(props) {
  const {error, doctors, loading} = FetchDoctors()
  const {user, currentUser} = useContext(UserContext)

  return (
    <AuthCheck>
      <AdminSidebar>
        {/* Add Doctor */}
        <div>
          <h1 className="prose lg:prose-xl font-bold ml-4 py-2 dark:text-gray1">
            Add Doctor
          </h1>
          <div className="mx-4">

           <AddDoctor />

           </div>
        </div>

        {/* Doctors List */}
        <div>
          <h1 className="prose lg:prose-xl font-bold ml-4 py-2 dark:text-gray1">
            All Doctors
          </h1>
          <div className="mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800">
              <div className="w-full overflow-x-auto p-4">

                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">Doctor</th>
                      <th className="px-4 py-3">ID</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Edit</th>
                    </tr>
                  </thead>
                  {(loading) && (
                    <tbody>
                      <tr>
                      <td></td>
                      <td></td>
                      <td><FaSpinner className=' my-40 animate-spin text-blue-500' size={40}/></td>
                    </tr>
                    </tbody>
                  )}

                    {(!loading) && (
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      {doctors.map(doctor => (
                        <DoctorCard key={doctor.id} name={doctor.name} speciality={doctor.speciality} email={doctor.email} uid={doctor.uid}/>
                        ))}
                    </tbody>
                   )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminSidebar>
    </AuthCheck>
  );
}


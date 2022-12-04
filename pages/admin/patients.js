import AdminSidebar from "@components/AdminSidebar";
import AuthCheck from "@components/AuthCheck";

export default function Patients() {
  return (
    <AuthCheck>
    <AdminSidebar>
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-5xl text-center prose dark:prose-invert mb-5 font-bold'>All Patients</h1>
      <span className='text-7xl'>👥</span>
    </div>
    </AdminSidebar>
    </AuthCheck>
  );
}

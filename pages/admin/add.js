import AdminSidebar from "@components/AdminSidebar";
import AuthCheck from "@components/AuthCheck";

export default function Add(Component , pageProps) {
  return (
    <AuthCheck>
    <AdminSidebar>
      <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-5xl text-center mb-5 prose dark:prose-invert'>Add Patients</h1>
      <span className='text-7xl'>➕</span>
    </div>
    </AdminSidebar>
    </AuthCheck>
  );
}
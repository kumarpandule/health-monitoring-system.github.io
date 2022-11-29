import AdminSidebar from "@components/AdminSidebar";
import AuthCheck from "@components/AuthCheck";

export default function Reports(Component , pageProps) {
  return (
    <AuthCheck>
    <AdminSidebar>
      <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Reports</h1>
      <span className='text-7xl'>📄</span>
    </div>
    </AdminSidebar>
    </AuthCheck>
  );
}
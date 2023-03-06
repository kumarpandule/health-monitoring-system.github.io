import dynamic from "next/dynamic";
import React from "react";

const AuthCheck = dynamic(() => import("@components/AuthCheck"), {ssr: false});
const DoctorSidebar = dynamic(() => import("@components/DoctorSidebar"), {ssr: false});

export default function Reports(Component , pageProps) {
  return (
    <AuthCheck>
    <DoctorSidebar>
      <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-5xl text-center prose dark:prose-invert mb-5 font-bold'>Reports</h1>
      <span className='text-7xl'>📄</span>
    </div>
    </DoctorSidebar>
    </AuthCheck>
  );
}
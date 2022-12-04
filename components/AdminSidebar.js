import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPlus, FaUser, FaUsers, FaBell, FaNotesMedical, FaHome, FaCog,  } from 'react-icons/fa';

export default function AdminSidebar({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/admin/add',
      title: 'Add Patient',
      icon: <FaPlus size={28}/>,
    },
    {
      href: '/admin/patients',
      title: 'Patients',
      icon: <FaUsers size={28}/>,
    },
    {
      href: '/admin/notifications',
      title: 'Notifications',
      icon: <FaBell size={28}/>,
    },
    {
      href: '/admin/reports',
      title: 'Reports',
      icon: <FaNotesMedical size={28}/>,
    },
  ];

  return (
    <div className=" flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <nav className="flex md:w-60 w-16 h-full bg-gray2 dark:bg-gray6">
            <ul className="w-full flex flex-col mx-auto px-2 py-8">

              {/* Static Sidebar Icons */}
              <li key={'Profile'}>
              <div className="mt-4"></div>
              <Link href="/admin">
                <div
                  className={`sidebar-icon group ${
                    router.asPath === "/admin" && "dark:bg-blue-500 bg-blue-500 text-white"
                  }`}
                >
                  <FaUser size={28} />
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Profile
                  </span>
                </div>
              </Link>
              </li>

              <li key={'Dashboard'}>
              <div className="mt-4"></div>
              <Link href="/admin/dashboard">
                <div
                  className={`sidebar-icon group ${
                    router.asPath === "/admin/dashboard" && "dark:bg-blue-500 bg-blue-500 text-white"
                  }`}
                >
                  <FaHome size={28} />
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Dashboard
                  </span>
                </div>
              </Link>
              </li>
              <li key={'Divider'}>
              <Divider />
              </li>

              {/* Dynamic Sidebar Icons */}
              {menuItems.map(({ href, title, icon }) => (
                <li key={title}>
                <Link href={href}>
                  <div
                    className={`sidebar-icon group ${
                      router.asPath === href && "dark:bg-blue-500 bg-blue-500 text-white"
                    }`}
                  >
                    {icon}
                    <span className="sidebar-tooltip group-hover:scale-100">
                      {title}
                    </span>
                  </div>
                </Link>
                </li>
              ))}

              {/* Static Sidebar Icons */}
              <li key={'Divider2'}>
              <Divider />
              </li>
              <li key={'Setting'}>
              <Link href="/admin/setting">
                <div
                  className={`sidebar-icon group ${
                    router.asPath === "/admin/setting" && "bg-blue-500 dark:bg-blue-500 text-white"
                  }`}
                >
                  <FaCog size={28} />
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Setting
                  </span>
                </div>
              </Link>
              </li>
              <li key={'Doctors'}>
              <Link href="/admin/doctors">
                <div
                  className={`sidebar-icon group ${
                    router.asPath === "/admin/doctors" && "bg-blue-500 dark:bg-blue-500 text-white"
                  }`}
                >
                  <FaUsers size={28} />
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Doctors
                  </span>
                </div>
              </Link>
              </li>
            </ul>
          </nav>
          <main className="flex flex-col w-full bg-gray-100 dark:bg-gray-900 overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex flex-col w-full mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr my-2" />;
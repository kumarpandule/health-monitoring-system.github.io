import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPlus, FaUsers, FaBell, FaNotesMedical, FaHome, FaCog  } from 'react-icons/fa';

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
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div class="flex-1 flex flex-col overflow-hidden">
        <div class="flex h-full">
          <nav class="flex md:w-60 w-16 h-full bg-gray2 dark:bg-gray6">
            <div class="w-full flex flex-col mx-auto px-2 py-8">
              {/* Static Sidebar Icons */}
              <div className="mt-4"></div>
              <Link href="/admin">
                <div
                  className={`sidebar-icon group ${
                    router.asPath === "/admin" && "bg-blue-500 text-white"
                  }`}
                >
                  <FaHome size={28} />
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Dashboard
                  </span>
                </div>
              </Link>
              <Divider />

              {/* Dynamic Sidebar Icons */}
              {menuItems.map(({ href, title, icon }) => (
                <Link href={href}>
                  <div
                    className={`sidebar-icon group ${
                      router.asPath === href && "bg-blue-500 text-white"
                    }`}
                  >
                    {icon}
                    <span className="sidebar-tooltip group-hover:scale-100">
                      {title}
                    </span>
                  </div>
                </Link>
              ))}

              {/* Static Sidebar Icons */}
              <Divider />
              <Link href="/admin/setting">
                <div
                  className={`sidebar-icon group ${
                    router.asPath === "/setting" && "bg-blue-500 text-white"
                  }`}
                >
                  <FaCog size={28} />
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Setting
                  </span>
                </div>
              </Link>
            </div>
          </nav>
          <main class="flex flex-col w-full bg-gray-100 dark:bg-gray-900 overflow-x-hidden overflow-y-auto mb-14">
            <div class="flex flex-col w-full mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr my-2" />;
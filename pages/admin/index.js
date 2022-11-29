import AdminSidebar from "@components/AdminSidebar";
import AuthCheck from "@components/AuthCheck";
import { FaFileAlt, FaBell, FaUsers} from 'react-icons/fa';

export default function Admin(Component , pageProps) {
  return (
    <AuthCheck>
      <AdminSidebar>
        <h1 className="prose lg:prose-xl font-bold ml-4 dark:text-gray1">Dashboard</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 ">
          <div class="bg-white dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-500 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="stroke-current text-blue-500 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <FaUsers size={26} />
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">01</p>
              <p>Total Patients</p>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-500 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="stroke-current text-blue-500 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <FaFileAlt size={26} />
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">02</p>
              <p>Total Reports</p>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-500 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-gray-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="stroke-current text-blue-500 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
              >
                <FaBell size={26} />
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">00</p>
              <p>Appointments</p>
            </div>
          </div>
        </div>

        {/* <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
                <div class="relative flex flex-col min-w-0 h-96 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                  <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">
                          Social Traffic
                        </h3>
                      </div>
                      <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                        <button
                          class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="relative flex flex-col min-w-0 h-96 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                  <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">
                          Recent Activities
                        </h3>
                      </div>
                      <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                        <button
                          class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

        <h1 className="prose lg:prose-xl font-bold ml-4 dark:text-gray1">All Clients</h1>
        <div class="mt-4 mx-4">
          <div class="w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800">
            <div class="w-full overflow-x-auto p-4">
              <table class="w-full">
                <thead>
                  <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-4 py-3">Patient</th>
                    <th class="px-4 py-3">ID</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="/hacker.png"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p class="font-semibold">Kumar Pandule</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">
                            Dr Vishal Deshpande
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">#001</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        {" "}
                        Virel Fevr{" "}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm">15-01-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="/hacker.png"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p class="font-semibold">Nandita Sharma</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">
                            Dr Hema Pawar
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">#002</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-black bg-yellow-500 rounded-full dark:bg-yellow-500 dark:text-white">
                        {" "}
                        Kidney heart-attack{" "}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm">15-01-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="/hacker.png"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p class="font-semibold">Dushman</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">
                            Dr Kumar Pandule
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">#003</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                        {" "}
                        Expired{" "}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm">09-02-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="/hacker.png"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p class="font-semibold">Kumar Pandule</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">
                            Dr Vishal Deshpande
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">#001</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        {" "}
                        Virel Fevr{" "}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm">15-01-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src="/hacker.png"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            class="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p class="font-semibold">Someone else</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">
                            Dr Someone
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">#004</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                        {" "}
                        Brain Tumar{" "}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm">11-01-2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span class="flex items-center col-span-3">
                {" "}
                Showing 21-30 of 100{" "}
              </span>
              <span class="col-span-2"></span>
              <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                  <ul class="inline-flex items-center">
                    <li>
                      <button
                        class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Previous"
                      >
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                        1
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                        2
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">
                        3
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                        4
                      </button>
                    </li>
                    <li>
                      <span class="px-3 py-1">...</span>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                        8
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                        9
                      </button>
                    </li>
                    <li>
                      <button
                        class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Next"
                      >
                        <svg
                          class="w-4 h-4 fill-current"
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
          </div>
        </div>
      </AdminSidebar>
    </AuthCheck>
  );
}
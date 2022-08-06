/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from '@heroicons/react/solid';

export default function Stories() {
  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <div className="h-full px-4 py-6 sm:px-6 md:px-8">
        <div className="h-full relative" style={{ minHeight: '12rem' }}>
          <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-md bg-white">
            <div className="flex h-full">
              <ul className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6 w-full">
                {[...Array(6)].map((e, i) => (
                  <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-1 flex items-center justify-between border border-gray-200 bg-white rounded-md truncate">
                      <div className="flex flex-col  items-center flex-1 px-4 py-2 text-sm truncate">
                        <a className="text-gray-900 font-medium hover:text-gray-600">Image</a>
                        <p className="text-gray-500">Username</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="flex justify-center items-center w-full h-full gap-8 right-0">
              {[...Array(6)].map((e, i) => (
                <div className="h-24 w-16 flex flex-col justify-center items-center overflow-clip">
                  <button>
                    <img className="h-14 w-14 rounded-full" src="sample-user.png" alt="" />
                  </button>
                  <div className="text-xs mt-2 w-16 text-ellipsis overflow-hidden">username</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

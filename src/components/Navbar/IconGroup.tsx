import { Menu } from '@headlessui/react';
import { HeartIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

export default function ButtonGroup() {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center justify-end">
          <div className="flex">
            <button type="button" className="mx-2 rounded-full">
              <HeartIcon className="h-6 w-6" />
            </button>
            <button type="button" className="mx-2 rounded-full">
              <HomeIcon className="h-6 w-6" />
            </button>
          </div>
          <Menu as="div" className="ml-4 relative flex-shrink-0">
            <div>
              <Menu.Button className="bg-indigo-700 flex text-sm rounded-full text-white">
                <img className="h-8 w-8 rounded-full" src="sample-user.png" alt="" />
              </Menu.Button>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
}

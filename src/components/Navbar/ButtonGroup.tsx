import { HeartIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

export default function ButtonGroup() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static mr-10">
      <button type="button" className="mx-1 p-1 rounded-full">
        <HeartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <button type="button" className="mx-1 p-1 rounded-full">
        <HomeIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <button className="mx-3 bg-gray-800 flex text-sm rounded-full">
        <img className="h-10 w-10 rounded-full" src="user.png" alt="" />
      </button>
    </div>
  );
}

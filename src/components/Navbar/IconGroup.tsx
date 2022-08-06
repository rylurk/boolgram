import { HeartIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import ProfileButton from '../ProfileButton';

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
          <div className="ml-2 flex align-middle">
            <ProfileButton size={8} border={false} />
          </div>
        </div>
      </div>
    </>
  );
}

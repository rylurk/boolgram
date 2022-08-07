import { DotsHorizontalIcon } from '@heroicons/react/outline';
import ProfileButton from '../ProfileButton';

export default function PostHeader() {
  return (
    <div className="flex rounded-sm h-14">
      <div className="pl-6 self-center">
        <ProfileButton size={8} border={true} />
      </div>
      <div className="pl-4 self-center text-sm font-medium">Username</div>
      <div className="ml-auto pr-6 self-center h-[22px]">
        <button type="button" className="mx-2 rounded-full">
          <DotsHorizontalIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

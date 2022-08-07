import { DotsHorizontalIcon } from '@heroicons/react/outline';
import ProfileButton from '../ProfileButton';

export default function PostHeader(props: { profile?: string; username?: string }) {
  if (!props.profile) {
    return (
      <div className="flex rounded-sm h-14">
        <div className="pl-6 self-center">
          <ProfileButton size={7} border={false} />
        </div>
        <div className="ml-4 self-center w-24 h-4 bg-gray-200" />
        <div className="ml-4 self-center w-24 h-4 bg-gray-200" />
      </div>
    );
  }

  return (
    <div className="flex rounded-sm h-14">
      <div className="pl-6 self-center">
        <ProfileButton size={7} border={true} image={props.profile} />
      </div>
      <div className="pl-4 self-center text-sm font-medium">{props.username}</div>
      <div className="ml-auto pr-6 self-center h-[22px]">
        <button type="button" className="mx-2 rounded-full">
          <DotsHorizontalIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

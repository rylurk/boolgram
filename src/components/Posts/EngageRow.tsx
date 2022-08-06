import { HeartIcon, ChatIcon } from '@heroicons/react/outline';

export default function EngageRow() {
  return (
    <div>
      <div className="flex h-14">
        <div className="pl-3 self-center h-7">
          <button type="button" className="mx-2 rounded-full">
            <HeartIcon className="h-7 w-7" />
          </button>
          <button type="button" className="mx-2 rounded-full">
            <ChatIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
      <div className="pl-[24px] pb-2">
        <div className="font-semibold">x Likes</div>
      </div>
    </div>
  );
}

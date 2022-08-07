import ProfileButton from '../ProfileButton';

export default function UserSwitchRow() {
  return (
    <div className="flex rounded-sm h-20">
      <div className="self-center">
        <ProfileButton size={14} border={false} image="sample-user.png" />
      </div>
      <div className="flex flex-col h-full align-middle justify-center">
        <div className="pl-3 text-sm font-semibold">username</div>
        <div className="pl-3 text-sm font-semibold text-gray-400">name</div>
      </div>
      <div className="ml-auto self-center h-[22px] text-sm text-blue-600 font-semibold">
        <button>Switch</button>
      </div>
    </div>
  );
}

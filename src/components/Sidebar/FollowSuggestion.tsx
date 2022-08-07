import ProfileButton from '../UI/ProfileButton';

export default function FollowSuggestion() {
  return (
    <div className="flex h-12">
      <div className="self-center h-8">
        <ProfileButton size={8} border={false} />
      </div>
      <div className="self-center">
        <div className="pl-4 text-sm font-semibold">username</div>
      </div>
      <div className="ml-auto self-center h-[22px] text-sm text-blue-600 font-semibold">
        <button>Follow</button>
      </div>
    </div>
  );
}

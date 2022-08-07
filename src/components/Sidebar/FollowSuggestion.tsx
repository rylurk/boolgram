import ProfileButton from '../ProfileButton';

export default function FollowSuggestion(props: { username?: string; picture?: string }) {
  return (
    <div className="flex h-12">
      <div className="self-center h-8">
        <ProfileButton size={7} border={false} image={props.picture} />
      </div>
      <div className="self-center">
        {props.username ? (
          <div className="pl-4 text-sm font-semibold">{props.username}</div>
        ) : (
          <div className="ml-4 w-20 h-5 bg-gray-200" />
        )}
      </div>
      <div className="ml-auto self-center h-[22px] text-sm text-blue-600 font-semibold">
        <button>Follow</button>
      </div>
    </div>
  );
}

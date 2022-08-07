import ProfileButton from '../UI/ProfileButton';

export default function StoryItem(props: { profile?: string; username?: string }) {
  return (
    <div className="flex items-center justify-between rounded-md truncate">
      <div className="flex flex-col items-center flex-1 px-2 py-2 text-sm truncate">
        <div className="w-14 flex flex-col justify-center items-center overflow-clip">
          <ProfileButton size={7} border={props.profile ? true : false} image={props.profile} />
          <div className="text-xs mt-2 w-full text-ellipsis overflow-hidden text-center">
            {props.username ? props.username : '...'}
          </div>
        </div>
      </div>
    </div>
  );
}

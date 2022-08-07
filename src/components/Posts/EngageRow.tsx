import { HeartIcon, ChatIcon } from '@heroicons/react/outline';
import { PostLike } from '../../types/Posts';

export default function EngageRow(props: { likes: PostLike[] }) {
  let likesMessage = <div className="font-normal">Be the first to like this</div>;

  if (props.likes.length === 1) {
    likesMessage = (
      <div className="font-normal">
        <span className="font-semibold">{props.likes[0].username}</span> likes this
      </div>
    );
  }

  if (props.likes.length > 1) {
    likesMessage = (
      <div className="font-normal">
        <span className="font-semibold">{props.likes[0].username}</span> and{' '}
        {props.likes.length - 1 === 1 ? '1 other likes ' : `${props.likes.length - 1} others like `}
        this
      </div>
    );
  }

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
        <div className="font-semibold">{likesMessage}</div>
      </div>
    </div>
  );
}

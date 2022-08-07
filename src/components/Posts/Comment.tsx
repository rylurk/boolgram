import { PostComment } from '../../types/Posts';

export default function Comment(props: { comment: PostComment }) {
  return (
    <div className="flex flex-row">
      <div className="font-semibold">{props.comment.username}</div>
      <div className="pl-1">{props.comment.text}</div>
    </div>
  );
}

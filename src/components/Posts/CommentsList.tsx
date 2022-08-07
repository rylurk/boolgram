import { useState } from 'react';
import { PostComment } from '../../types/Posts';
import Comment from './Comment';

export default function Comments(props: { comments?: PostComment[] }) {
  const [limitComments, setLimitComments] = useState(true);

  if (!props.comments) {
    return null;
  }

  const commentsList = limitComments ? props.comments.slice(0, 3) : props.comments;

  const toggleComments = () => {
    setLimitComments(!limitComments);
  };

  return (
    <div className="pl-[24px] pb-2">
      <div className="text-gray-400 mb-1">
        {props.comments?.length > 3 && (
          <button onClick={toggleComments}>View all {props.comments.length} comments</button>
        )}
      </div>
      {commentsList.map((comment) => (
        <Comment key={comment.username + comment.text} comment={comment} />
      ))}
    </div>
  );
}

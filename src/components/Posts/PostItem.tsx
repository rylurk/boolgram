import { Post } from '../../types/Posts';
import Caption from './Caption';
import Comments from './Comments';
import EngageRow from './EngageRow';
import PostDate from './PostDate';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

export default function PostItem(props: { post: Post }) {
  return (
    <div className="h-full border border-gray-200 rounded-md bg-white text-sm">
      <PostHeader profile={props.post.profile_picture} username={props.post.profile_name} />
      <PostImage />
      <EngageRow />
      <Caption />
      <Comments />
      <PostDate />
      <PostFooter />
    </div>
  );
}

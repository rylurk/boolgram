import PostHeader from '../Posts/PostHeader';
import PostImage from '../Posts/PostImage';

export default function SkeletonPost() {
  return (
    <div className="h-full border border-gray-200 rounded-md bg-white text-sm">
      <PostHeader />
      <PostImage />
    </div>
  );
}

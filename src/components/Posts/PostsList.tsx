import { useQuery } from '@tanstack/react-query';
import { Post } from '../../types/Posts';
import { getPosts } from '../../utils/boolgram';
import PostItem from './PostItem';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

export default function PostsList() {
  const { data, isLoading } = useQuery(['getPosts'], getPosts);

  if (isLoading) {
    return (
      <div className="mt-6 mb-10">
        <div className="h-full border border-gray-200 rounded-md bg-white text-sm">
          <PostHeader />
          <PostImage />
        </div>
      </div>
    );
  }

  return (
    <>
      {data.map((post: Post) => (
        <li key={post.post_image} className="mt-6 mb-10">
          <PostItem post={post} />
        </li>
      ))}
    </>
  );
}

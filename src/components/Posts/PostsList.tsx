import { useQuery } from '@tanstack/react-query';
import { Post } from '../../types/Posts';
import { getPosts } from '../../utils/boolgram';
import PostItem from './PostItem';

export default function PostsList() {
  const { data, isLoading } = useQuery(['getPosts'], getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
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

import PostsList from './PostsList';

export default function Posts() {
  return (
    <div className="bg-gray-50 md:min-w-0 md:flex-1">
      <div className="flex justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="relative h-full" style={{ minHeight: '36rem' }}>
          <ul>
            <PostsList />
          </ul>
        </div>
      </div>
    </div>
  );
}

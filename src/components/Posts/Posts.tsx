import Caption from './Caption';
import Comments from './Comments';
import EngageRow from './EngageRow';
import PostDate from './PostDate';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

export default function Posts() {
  return (
    <div className="bg-gray-50 md:min-w-0 md:flex-1">
      <div className="flex justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="relative h-full" style={{ minHeight: '36rem' }}>
          <ul>
            {[...Array(8)].map((e, i) => (
              <li key={i} className="mt-6">
                <div className="h-full border border-gray-200 rounded-md bg-white text-sm">
                  <PostHeader />
                  <PostImage />
                  <EngageRow />
                  <Caption />
                  <Comments />
                  <PostDate />
                  <PostFooter />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

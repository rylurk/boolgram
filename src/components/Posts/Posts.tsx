import Comments from './Comments';
import EngageRow from './EngageRow';
import PostHeader from './PostHeader';

export default function Posts() {
  return (
    <div className="bg-gray-50 md:min-w-0 md:flex-1">
      <div className="flex justify-center h-full px-4 py-6 sm:px-6 md:px-8">
        <div className="relative h-full" style={{ minHeight: '36rem' }}>
          <ul>
            {[...Array(8)].map((e, i) => (
              <li className="mt-6">
                <div className="h-full border border-gray-100 rounded-md bg-white text-sm">
                  <PostHeader />
                  <div>
                    <img className="" src="sample-post.jpeg" alt="" />
                  </div>
                  <EngageRow />
                  <div className="flex flex-row pl-[24px] pb-4">
                    <div className="font-semibold">username</div>
                    <div className="pl-1">caption</div>
                  </div>
                  <Comments />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

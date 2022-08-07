import PostsContainer from './Posts/PostsContainer';
import Sidebar from './Sidebar/Sidebar';
import StoriesPanel from './Stories/StoriesPanel';

export default function Feed() {
  return (
    <>
      <div className="flex-shrink w-full max-w-7xl mx-auto md:flex">
        <div className="flex-1 min-w-0 bg-white">
          <StoriesPanel />
          <PostsContainer />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

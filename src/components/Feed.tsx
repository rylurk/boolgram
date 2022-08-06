import Posts from './Posts/Posts';
import Sidebar from './Sidebar/Sidebar';
import Stories from './Stories/Stories';

export default function Feed() {
  return (
    <>
      <div className="flex-shrink w-full max-w-7xl mx-auto md:flex">
        <div className="flex-1 min-w-0 bg-white">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

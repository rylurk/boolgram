import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';
import Stories from './components/Stories/Stories';

export default function Feed() {
  return (
    <>
      <div className="flex-grow w-full max-w-7xl mx-auto md:flex">
        <div className="flex-1 min-w-0 bg-white">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

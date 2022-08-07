import StoryItem from './StoryItem';

export default function Stories() {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-center h-full px-4 py-6 sm:px-6 md:px-8">
        <div className="h-full w-[504px] relative">
          <div className="h-32 border border-gray-200 rounded-md bg-white">
            <ul className="flex w-full h-full px-10 overflow-x-auto">
              {[...Array(8)].map((e, i) => (
                <li className="stories-item flex rounded-md w-full justify-center">
                  <StoryItem />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

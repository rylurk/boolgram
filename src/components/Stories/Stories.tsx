export default function Stories() {
  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <div className="h-full px-4 py-6 sm:px-6 md:px-8">
        <div className="h-full relative" style={{ minHeight: '12rem' }}>
          <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-md bg-white">
            <ul className="flex w-full h-full px-10 overflow-x-auto">
              {[...Array(8)].map((e, i) => (
                <li className="stories-item flex rounded-md w-full justify-center">
                  <div className="flex items-center justify-between rounded-md truncate">
                    <div className="flex flex-col items-center flex-1 px-4 py-2 text-sm truncate">
                      <div className="h-24 w-16 flex flex-col justify-center items-center overflow-clip">
                        <button className="border-2 border-red-500 rounded-full p-[2px]">
                          <img className="h-14 w-14 rounded-full" src="sample-user.png" alt="" />
                        </button>
                        <div className="text-xs mt-2 w-16 text-ellipsis overflow-hidden text-center">username</div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

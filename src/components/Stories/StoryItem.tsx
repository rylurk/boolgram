export default function StoryItem() {
  return (
    <div className="flex items-center justify-between rounded-md truncate">
      <div className="flex flex-col items-center flex-1 px-2 py-2 text-sm truncate">
        <div className="w-14 flex flex-col justify-center items-center overflow-clip">
          <button className="border-2 border-red-500 rounded-full p-[2px]">
            <img className="h-10 w-10 rounded-full" src="sample-user.png" alt="" />
          </button>
          <div className="text-xs mt-2 w-16 text-ellipsis overflow-hidden text-center">username</div>
        </div>
      </div>
    </div>
  );
}

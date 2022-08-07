export default function PostFooter() {
  return (
    <div className="flex border-t rounded-sm border-gray-200 h-14 text-base">
      <div className="pl-6 self-center text-gray-400 font-semibold">
        <button>Add a comment</button>
      </div>
      <div className="ml-auto pr-6 self-center h-[22px] text-blue-400 font-semibold">
        <button>Post</button>
      </div>
    </div>
  );
}

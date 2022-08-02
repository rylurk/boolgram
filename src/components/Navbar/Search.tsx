export default function Search() {
  return (
    <div className="relative flex-1 px-2 flex items-center justify-center sm:inset-0">
      <div className="w-60 sm:max-w-xs">
        <input
          id="search"
          name="search"
          className="w-full bg-gray-50 border border-gray-300 py-1 text-sm text-center placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-full px-2 md:px-6 flex justify-center">
          <div className="relative text-indigo-200 focus-within:text-gray-400 w-56">
            <input
              id="search"
              name="search"
              className="w-full bg-gray-50 border border-gray-300 py-1 text-sm text-center placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

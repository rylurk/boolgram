export default function Posts() {
  return (
    <div className="bg-gray-50 md:min-w-0 md:flex-1">
      <div className="flex justify-center h-full px-4 py-6 sm:px-6 md:px-8">
        <div className="relative h-full w-fit" style={{ minHeight: '36rem' }}>
          <ul>
            {[...Array(8)].map((e, i) => (
              <li className="mt-6">
                <div className="h-full border-2 border-gray-200 border-dashed rounded-md bg-white">
                  <div className="flex flex-row border rounded-sm border-gray-200">
                    <div>Profile</div>
                    <div>Username</div>
                    <div className="ml-auto">Button</div>
                  </div>

                  <div className="">
                    <img className="" src="sample-post.jpeg" alt="" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

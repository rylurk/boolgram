export default function Feed() {
  return (
    <>
      <div className="flex-grow w-full max-w-7xl mx-auto md:flex">
        <div className="flex-1 min-w-0 bg-white">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="h-full pl-4 pr-6 py-6 sm:pl-6 md:pl-8">
              <div className="h-full relative" style={{ minHeight: '12rem' }}>
                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-md bg-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 md:min-w-0 md:flex-1">
            <div className="h-full py-6 px-4 sm:px-6 md:px-8">
              <div className="relative h-full" style={{ minHeight: '36rem' }}>
                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-md bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 pr-4 sm:pr-6 md:pr-8 md:flex-shrink-0 md:border-l md:border-gray-200">
          <div className="h-full pl-6 py-6 md:w-80">
            <div className="h-full relative" style={{ minHeight: '16rem' }}>
              <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

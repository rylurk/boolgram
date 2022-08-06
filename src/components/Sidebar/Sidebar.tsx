export default function Sidebar() {
  return (
    <div className="bg-gray-50 pr-4 sm:pr-6 md:pr-8 md:flex-shrink-0 md:border-l md:border-gray-200">
      <div className="h-full pl-6 py-6 md:w-80">
        <div className="h-full relative" style={{ minHeight: '16rem' }}>
          <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-md" />
        </div>
      </div>
    </div>
  );
}

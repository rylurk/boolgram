import SuggestionCol from './SuggestionCol';
import UserSwitchRow from './UserSwitchRow';

export default function Sidebar() {
  return (
    <div className="bg-gray-50 md:pr-4 flex justify-center">
      <div className="h-full px-8 md:pl-6 md:pr-10 py-6 w-[500px] md:w-80 lg:w-[400px] xl:w-[500px]">
        <div className="h-full relative" style={{ minHeight: '16rem' }}>
          <div className="absolute inset-0">
            <UserSwitchRow />
            <SuggestionCol />
            <div className="mt-6 pb-6 uppercase text-xs text-gray-400">© 2022 INSTAGRAM FROM META</div>
          </div>
        </div>
      </div>
    </div>
  );
}

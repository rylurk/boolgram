import FollowSuggestion from './FollowSuggestion';

export default function SuggestionCol() {
  return (
    <div className="flex flex-col h-fit mt-6">
      <div className="flex flex-row mb-4">
        <div className="align-middle justify-center">
          <div className="font-bold text-gray-400">Suggestions For You</div>
        </div>
        <div className="ml-auto pt-1 h-[22px] text-sm font-semibold">
          <button>See All</button>
        </div>
      </div>
      {[...Array(8)].map((e, i) => (
        <FollowSuggestion key={i} />
      ))}
    </div>
  );
}

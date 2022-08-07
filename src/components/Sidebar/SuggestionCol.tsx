import { useQuery } from '@tanstack/react-query';
import { Story } from '../../types/Stories';
import { getStories } from '../../utils/boolgram';
import FollowSuggestion from './FollowSuggestion';

export default function SuggestionCol() {
  const { data, isLoading } = useQuery(['getStories'], getStories);

  let userList;

  if (isLoading) {
    userList = (
      <>
        {[...Array(8)].map((e, i) => (
          <FollowSuggestion key={i} />
        ))}
      </>
    );
  }

  if (data) {
    userList = (
      <>
        {data.map((user: Story) => (
          <FollowSuggestion key={user.profile_name} username={user.profile_name} picture={user.profile_picture} />
        ))}
      </>
    );
  }

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
      {userList}
    </div>
  );
}

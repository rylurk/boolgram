import { useQuery } from '@tanstack/react-query';
import { getStories } from '../../utils/boolgram';
import StoryItem from './StoryItem';
import { Story } from '../../types/Stories';

export default function StoriesList() {
  const { data, isLoading } = useQuery(['getStories'], getStories);

  if (isLoading) {
    return (
      <>
        {[...Array(8)].map((e, i) => (
          <li key={i} className="stories-item flex rounded-md w-full justify-center">
            <StoryItem />
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      {data.map((story: Story) => (
        <li key={story.profile_name} className="stories-item flex rounded-md w-full justify-center">
          <StoryItem profile={story.profile_picture} username={story.profile_name} />
        </li>
      ))}
    </>
  );
}

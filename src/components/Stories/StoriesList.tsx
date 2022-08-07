import { useQuery } from '@tanstack/react-query';
import { getStories } from '../../utils/getStories';
import StoryItem from './StoryItem';

export default function StoriesList() {
  const { data, isLoading } = useQuery(['getStories'], getStories);

  if (isLoading) {
    return [...Array(8)].map((e, i) => (
      <li key={i} className="stories-item flex rounded-md w-full justify-center">
        <StoryItem />
      </li>
    ));
  }

  return data.map((story: { profile_picture: string; profile_name: string }) => (
    <li key={story.profile_name} className="stories-item flex rounded-md w-full justify-center">
      <StoryItem profile={story.profile_picture} username={story.profile_name} />
    </li>
  ));
}

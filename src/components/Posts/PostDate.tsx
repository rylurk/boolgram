import { PostDateTime } from '../../types/Posts';

export default function PostDate(props: { date: PostDateTime }) {
  const date = new Date(props.date.date);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDay() + 1;

  return (
    <div className="flex flex-row pl-[24px] pb-4">
      <div className="text-gray-400 uppercase text-xs">{`${month} ${day}`}</div>
    </div>
  );
}

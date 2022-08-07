export default function Caption(props: { username?: string; caption?: string }) {
  return (
    <div className="flex flex-row pl-[24px] pb-2">
      <div className="font-semibold">{props.username}</div>
      <div className="pl-1">{props.caption}</div>
    </div>
  );
}

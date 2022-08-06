export default function ProfileButton(props: { size: number; border: boolean }) {
  return (
    <button className={props.border ? `border-2 border-red-500 rounded-full p-[2px]` : ''}>
      <img className={`h-${props.size} w-${props.size} rounded-full`} src="sample-user.png" alt="" />
    </button>
  );
}

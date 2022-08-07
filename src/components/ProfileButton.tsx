export default function ProfileButton(props: { size: number; image?: string; border: boolean }) {
  return (
    <button className={props.border ? `border-2 border-red-500 rounded-full p-[2px]` : ''}>
      <img
        className={`h-${props.size} w-${props.size} rounded-full`}
        src={props.image ? props.image : `skeleton-user.png`}
        alt=""
      />
    </button>
  );
}

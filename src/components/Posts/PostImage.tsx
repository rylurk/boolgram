export default function PostImage(props: { image?: string }) {
  return (
    <div>
      <img className="h-full w-full" src={props.image ? props.image : `skeleton-post.png`} alt="" />
    </div>
  );
}

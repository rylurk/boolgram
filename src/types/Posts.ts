export type Post = {
  profile_picture: string;
  profile_name: string;
  profile_full_name: string;
  post_image: string;
  post_text: string;
  date: PostDate;
  comments: PostComment[];
  likes: PostLike[];
};

type PostDate = {
  date: string;
  timezone_type: number;
  timezone: string;
};

type PostComment = {
  username: string;
  text: string;
};

type PostLike = {
  username: string;
  profile_picture: string;
};

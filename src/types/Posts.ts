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

export type PostDate = {
  date: string;
  timezone_type: number;
  timezone: string;
};

export type PostComment = {
  username: string;
  text: string;
};

export type PostLike = {
  username: string;
  profile_picture: string;
};

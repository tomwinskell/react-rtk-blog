'use client';
import { Post } from '@/app/types';
import { Button } from '@/app/ui/components/Button';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useParams, useRouter } from 'next/navigation';
import { deletePost } from '@/lib/slices/posts';

export const PostDetail = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useParams();
  const posts = useAppSelector((state) => state.posts.posts);

  const getPost = (id: string, posts: Post[]): Post | undefined => {
    return posts.find((post) => post.id === id);
  };

  const foundPost = getPost(id as string, posts);
  if (!foundPost) {
    return <div>No post found.</div>;
  }
  const { title, categories, content } = foundPost;

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(deletePost(id));
    router.push('/posts');
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{categories}</p>
      <p>{content}</p>
      <Button type="button" handleClick={handleDelete} id={id as string}>
        Delete Post
      </Button>
    </div>
  );
};

'use client';
import { Post } from '@/app/types';
import { Button } from '@/app/ui/components/Button';
import { useAppSelector } from '@/lib/hooks';
import { useParams } from 'next/navigation';

export const PostDetail = (): React.JSX.Element => {
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

  const deletePost = () => {
    console.log('delete');
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{categories}</p>
      <p>{content}</p>
      <Button type="button" handleClick={deletePost}>
        Delete Post
      </Button>
    </div>
  );
};

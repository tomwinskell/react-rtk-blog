'use client';
import { Button } from '@/app/ui/components/Button';
import { useAppSelector } from '@/lib/hooks';
import { useParams } from 'next/navigation';

export const PostDetail = (): React.JSX.Element => {
  const { id } = useParams();
  const posts = useAppSelector((state) => state.posts.posts);
  const { title, categories, content } = (posts.filter((post) => post.id === id))[0];
  const deletePost = () => {
    console.log('delete');
  };
  return (
    <div>
      {!title ? (
        <p>Post loading...</p>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{categories}</p>
          <p>{content}</p>
          <Button type="button" handleClick={deletePost}>
            Delete Post
          </Button>
        </>
      )}
    </div>
  );
};

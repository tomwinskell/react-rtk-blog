'use client'
import { Button } from '@/app/ui/components/Button';

export const PostDetail = (): React.JSX.Element => {
  const { title, categories, content } = {
    title: 'Bird Enthusiast',
    categories: 'birds, fish',
    content: 'I love watching birds and fish swim.',
  };
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

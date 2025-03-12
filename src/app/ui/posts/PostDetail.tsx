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

  const getPost = (id: string, posts: Post[]): Post | undefined =>
    posts.find((post) => post.id === id);

  const foundPost = getPost(id as string, posts);
  if (!foundPost) {
    return <div className="text-center text-gray-500">No post found.</div>;
  }

  const { title, categories, content } = foundPost;

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(deletePost(id));
    router.push('/posts');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-500 text-sm mt-2">Categories: {categories}</p>
      <p className="mt-4 text-gray-700">{content}</p>
      <Button type="button" handleClick={handleDelete} id={id as string}>
        Delete Post
      </Button>
    </div>
  );
};

'use client'
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

export const PostList = (): React.JSX.Element => {
  const posts = useAppSelector((state) => state.posts.posts);
  return (
    <div>
      {!posts ? (
        <p>Posts loading...</p>
      ) : (
        <ul>
          {posts.map(({ id, title }) => (
            <Link href={`/posts/${id}`} key={id}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

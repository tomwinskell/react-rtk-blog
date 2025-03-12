'use client'
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

export const PostList = (): React.JSX.Element => {
  const posts = useAppSelector((state) => state.posts.posts);

  return (
    <div>
      {!posts ? (
        <p className="text-gray-500 text-center">Posts loading...</p>
      ) : (
        <ul className="divide-y border rounded-lg">
          {posts.map(({ id, title }) => (
            <li key={id} className="p-4 hover:bg-gray-100 transition">
              <Link href={`/posts/${id}`} className="text-blue-500 hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

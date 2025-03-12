import Link from 'next/link';

export const PrimaryNavigation = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 shadow-lg rounded-lg mb-5">
      <ul className="flex space-x-6">
        <li>
          <Link href="/posts" className="hover:text-blue-400">All Posts</Link>
        </li>
        <li>
          <Link href="/posts/new" className="hover:text-blue-400">New Post</Link>
        </li>
      </ul>
    </nav>
  );
};

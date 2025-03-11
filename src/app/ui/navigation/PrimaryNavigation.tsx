import Link from 'next/link';

export const PrimaryNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/posts">All Posts</Link>
        </li>
        <li>
          <Link href="/posts/new">New Post</Link>
        </li>
      </ul>
    </nav>
  );
};

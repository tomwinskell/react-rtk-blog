import Link from 'next/link';

export const PostList = (): React.JSX.Element => {
  const posts = [
    {
      id: '123e4567-e89b-12d3-a456-426614174001',
      title: 'Bird Enthusiast',
      categories: 'birds, fish',
      content: 'I love watching birds and fish swim.',
    },
    {
      id: '123e4567-e89b-12d3-a456-426614174002',
      title: 'Ocean Explorer',
      categories: 'fish, marine life',
      content: 'Diving deep to explore fish habitats.',
    },
    {
      id: '123e4567-e89b-12d3-a456-426614174003',
      title: 'Nature Lover',
      categories: 'birds, wildlife',
      content: 'Birds are fascinating creatures of the wild.',
    },
    {
      id: '123e4567-e89b-12d3-a456-426614174004',
      title: 'Aquarium Hobbyist',
      categories: 'fish, aquatics',
      content: 'Keeping fish in an aquarium is peaceful.',
    },
    {
      id: '123e4567-e89b-12d3-a456-426614174005',
      title: 'Wildlife Photographer',
      categories: 'birds, photography',
      content: 'Capturing birds in their natural habitat.',
    },
  ];
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

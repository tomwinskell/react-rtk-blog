export type Post = {
  title: string;
  categories: string;
  content: string;
};

export const PostDetail = ({
  title,
  categories,
  content,
}: Post): React.JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{categories}</p>
      <p>{content}</p>
    </div>
  );
};

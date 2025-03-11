'use client'
import { Button } from '@/app/ui/components/Button';
import { TextField } from '@/app/ui/components/TextField';

export const Form = (): React.JSX.Element => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <TextField name="title" placeholder="Title" />
      <TextField name="categories" placeholder="Categories" />
      <TextField type="textarea" name="content" placeholder="Content" />
      <Button type="submit" handleClick={handleClick}>Add Post</Button>
    </div>
  );
};

import { Button } from '@/app/ui/components/Button';
import { TextField } from '@/app/ui/components/TextField';

export const Form = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <TextField name="title" placeholder="Title" />
      <TextField name="categories" placeholder="Categories" />
      <TextField type="textarea" name="content" placeholder="Content" />
      <Button type="submit" handleClick={handleClick} />
    </div>
  );
};

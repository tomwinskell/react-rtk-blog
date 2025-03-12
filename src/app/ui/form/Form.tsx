'use client';
import { Button } from '@/app/ui/components/Button';
import { TextField } from '@/app/ui/components/TextField';
import { useAppDispatch } from '@/lib/hooks';
import { addPost } from '@/lib/slices/posts';
import { useRouter } from 'next/navigation';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Form = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = (target: HTMLFormElement): FormData => {
      return new FormData(target);
    };
    const formJson = (formData: FormData) => {
      return { ...Object.fromEntries(formData.entries()), id: uuidv4() };
    };
    dispatch(addPost(formJson(formData(e.currentTarget))));
    router.push('/posts');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField name="title" placeholder="Title" />
        <TextField name="categories" placeholder="Categories" />
        <TextField type="textarea" name="content" placeholder="Content" />
        <Button type="submit">Add Post</Button>
      </form>
    </div>
  );
};

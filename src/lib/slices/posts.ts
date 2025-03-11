import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
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
  ],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;

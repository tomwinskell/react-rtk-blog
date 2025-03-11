import { combineSlices } from '@reduxjs/toolkit';
import { postsSlice } from './posts';

const rootReducer = combineSlices(postsSlice);

export { rootReducer };

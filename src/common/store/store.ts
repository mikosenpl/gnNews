import { configureStore } from '@reduxjs/toolkit';
import displaySlice, { DisplayState } from './slices/display/displaySlice';
import paginationSlice, {
  PaginationState,
} from './slices/pagination/paginationSlice';

export interface RootState {
  display: DisplayState;
  pagination: PaginationState;
}

export const store = configureStore({
  reducer: {
    display: displaySlice,
    pagination: paginationSlice,
  },
});

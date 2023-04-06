import { createSlice } from '@reduxjs/toolkit';

export interface PaginationState {
  currentPage: number;
  perPageResults: number;
}

export const initialPaginationState: PaginationState = {
  currentPage: 1,
  perPageResults: 6,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState,
  reducers: {
    setPaginationCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPaginationPerPageResults: (state, action) => {
      state.perPageResults = action.payload;
    },
  },
});

export const { setPaginationCurrentPage, setPaginationPerPageResults } =
  paginationSlice.actions;

export default paginationSlice.reducer;

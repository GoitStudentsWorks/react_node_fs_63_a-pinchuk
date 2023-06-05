import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchAllReviews,
  fetchUserReviews,
  fetchUserReviewById,
  addReview,
  deleteReview,
  updateReview,
} from './operations';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllReviews.pending, pending)
      .addCase(fetchUserReviews.pending, pending)
      .addCase(fetchUserReviewById.pending, pending)
      .addCase(addReview.pending, pending)
      .addCase(deleteReview.pending, pending)
      .addCase(updateReview.pending, pending)
      .addCase(fetchAllReviews.rejected, rejected)
      .addCase(fetchUserReviews.rejected, rejected)
      .addCase(fetchUserReviewById.rejected, rejected)
      .addCase(addReview.rejected, rejected)
      .addCase(deleteReview.rejected, rejected)
      .addCase(updateReview.rejected, rejected)
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(fetchUserReviewById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.data.push(action.payload);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.reviews.id === action.payload.id;
        state.reviews.data.splice(index, 1);
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.reviews.id === action.payload.id;
        state.reviews[index] = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.reviews = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

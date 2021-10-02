import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  }
});

export default uiSlice;
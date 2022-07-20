import { createSlice } from '@reduxjs/toolkit';

const shoppingCartIsShowSlice = createSlice({
  name: 'shoppingCartIsShow',
  initialState: false,
  reducers: {
    shoppingCartShown(state) {
      state = true;
      return state;
    },
    shoppingCartHidden(state) {
      state = false;
      return state;
    },
  },
});

export const { shoppingCartShown, shoppingCartHidden } =
  shoppingCartIsShowSlice.actions;

export default shoppingCartIsShowSlice.reducer;

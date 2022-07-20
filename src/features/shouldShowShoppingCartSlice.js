import { createSlice } from '@reduxjs/toolkit';

const shouldShowShoppingCartSlice = createSlice({
  name: 'shouldShowShoppingCart',
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
  shouldShowShoppingCartSlice.actions;

export default shouldShowShoppingCartSlice.reducer;

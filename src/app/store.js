import { configureStore } from '@reduxjs/toolkit';

import productsInCartReducer from '../features/productsInCartSlice';
import productsDataReducer from '../features/productsDataSlice';
import shoppingCartIsShowReducer from '../features/shoppingCartIsShowSlice';

export default configureStore({
  reducer: {
    productsInCart: productsInCartReducer,
    productsData: productsDataReducer,
    shoppingCartIsShow: shoppingCartIsShowReducer,
  },
});

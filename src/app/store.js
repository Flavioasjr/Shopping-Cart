import { configureStore } from '@reduxjs/toolkit';

import productsInCartReducer from '../features/productsInCartSlice';
import productsReducer from '../features/productsSlice';
import shouldShowShoppingCartReducer from '../features/shouldShowShoppingCartSlice';

export default configureStore({
  reducer: {
    productsInCart: productsInCartReducer,
    products: productsReducer,
    shouldShowShoppingCart: shouldShowShoppingCartReducer,
  },
});

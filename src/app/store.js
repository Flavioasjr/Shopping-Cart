import { configureStore } from '@reduxjs/toolkit';

import productsInCartReducer from '../features/productsInCartSlice';
import shouldShowShoppingCartReducer from '../features/shouldShowShoppingCartSlice';

export default configureStore({
  reducer: {
    productsInCart: productsInCartReducer,
    shouldShowShoppingCart: shouldShowShoppingCartReducer,
  },
});

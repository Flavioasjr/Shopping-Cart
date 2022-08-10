import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import productsInCartReducer from '../features/productsInCartSlice';
import productsReducer from '../features/productsSlice';
import shouldShowShoppingCartReducer from '../features/shouldShowShoppingCartSlice';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        productsInCart: productsInCartReducer,
        products: productsReducer,
        shouldShowShoppingCart: shouldShowShoppingCartReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

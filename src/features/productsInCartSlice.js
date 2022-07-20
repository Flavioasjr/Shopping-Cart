import { createSlice } from '@reduxjs/toolkit';

const productsInCartSlice = createSlice({
  name: 'productsInCart',
  initialState: [],
  reducers: {
    productAdded: {
      reducer(state, action) {
        const productExists = state.some(
          (product) => product.id === action.payload.id
        );

        if (productExists) {
          state.map((product) => {
            if (product.id === action.payload.id) {
              product.quantity += 1;
            }
            return product;
          });
        } else {
          state.push(action.payload);
        }
      },
      prepare(product) {
        return {
          payload: {
            ...product,
            quantity: 1,
          },
        };
      },
    },

    productRemoved(state, action) {
      const filteredState = state.filter(
        (product) => product.id !== Number(action.payload)
      );
      return filteredState;
    },

    quantityAdded(state, action) {
      state.map((product) => {
        if (product.id === Number(action.payload)) product.quantity += 1;
        return product;
      });
    },

    quantitySubtracted(state, action) {
      state.map((product) => {
        if (product.id === Number(action.payload)) product.quantity -= 1;
        if (product.quantity <= 1) {
          product.quantity = 1;
        }
        return product;
      });

      // return state.filter((product) => product.quantity > 0);
    },
  },
});

export const {
  productAdded,
  productRemoved,
  quantityAdded,
  quantitySubtracted,
} = productsInCartSlice.actions;

export default productsInCartSlice.reducer;

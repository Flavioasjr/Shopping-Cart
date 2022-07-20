import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsData = createAsyncThunk(
  'productsData/fetchProductsData',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const productsFilter = products.filter(
      (product) => product.category !== 'electronics'
    );
    return productsFilter;
  }
);

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.products = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsDataSlice.reducer;

export const selectAllProducts = (state) => state.productsData.products;

export const selectProductById = (state, productId) =>
  state.productsData.products.find((product) => product.id === productId);

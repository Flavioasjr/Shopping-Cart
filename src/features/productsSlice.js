import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
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

const productsSlice = createSlice({
  name: 'productsData',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

export const selectAllProducts = (state) => state.products.products;

export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);

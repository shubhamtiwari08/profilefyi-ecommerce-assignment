import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../libs/types';



interface ProductState {
  products: CartItem[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<CartItem[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

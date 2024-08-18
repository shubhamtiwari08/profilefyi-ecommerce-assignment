import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  imageUrl:string;
  price: number;
  description:string;
  discount:number;
  quantity?: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
        let item = {...action.payload,quantity:1}
        state.items.push(item);
    },
    removeFromCart(state, action: PayloadAction<number>) {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity(state,action:PayloadAction<CartItem>){
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = (state.items[itemIndex].quantity ?? 0) + 1;
      } 
    },
    decreaseQuantity(state,action:PayloadAction<CartItem>){
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
     if (itemIndex !== -1) {
    // Get the current quantity of the item
    const currentQuantity = state.items[itemIndex].quantity ?? 0;
    if (currentQuantity > 1) {
      state.items[itemIndex].quantity = currentQuantity - 1;
    } else {
      state.items.splice(itemIndex, 1);
    }
    }
  }
  },
});

export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

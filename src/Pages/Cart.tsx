import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/index';
import { removeFromCart } from '../Store/slices/cartSlice';


const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  console.log(items)

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };



  return (
    <div className="flex flex-col md:flex-row">
      {/* Product List */}
      <div className="flex-1 p-4 border-r border-gray-300">
        <h2 className="mb-4 text-xl font-bold">Your Cart</h2>
        {items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="flex items-center pb-4 mb-4 border-b">
              <img src={item.imageUrl} alt={item.name} className="object-cover w-24 h-24 mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-16 p-1 border border-gray-300"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 ml-4 text-white bg-red-500 rounded"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Cart Summary */}
      <div className="flex-1 p-4 bg-gray-100">
        <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">Subtotal: 0</p>
          <p className="text-lg font-semibold">Discount: 0</p>
          <p className="text-lg font-semibold">Total: 0</p>
        </div>
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

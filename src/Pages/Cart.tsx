import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/index";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Store/slices/cartSlice";
import CartProductCard from "../Components/ProductCard/CartProductCard";

interface Total {
  total: number;
}

const Cart: React.FC = () => {
  const [total, setTotal] = useState<Total>({ total: 0 });
  const items = useSelector((state: RootState) => state.cart.items);

  const handleTotal = () => {
    const total = items.reduce(
      (acc, curr) => acc + curr.price * (curr.quantity || 1),
      0
    );
    setTotal({ total });
  };

  useEffect(() => {
    handleTotal();
  }, [items]);

  return (
    <>
      <h2 className="p-2 mb-4 text-xl font-bold bg-white text-blue-500 shadow-sm w-[80%] mx-auto mt-2 border border-gray-200 ">
        Your Cart
      </h2>
      <div className="grid grid-cols-[60%_auto] gap-y-2 gap-x-4 w-[80%] mx-auto relative z-[-1]">
        <div className="relative flex flex-col bg-white border border-gray-200 shadow-sm h-max">
          {/* Product List */}
          <div className="w-full">
            {items.map((item) => (
              <CartProductCard itemDetails={item} />
            ))}
          </div>
          <div className="sticky bottom-0 flex justify-end w-full p-4 px-4 mt-4 bg-white shadow-product">
            <button className="flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-all duration-700 ease-in-out transform scale-100 bg-orange-500 opacity-100 hover:bg-orange-600">
              PLACE ORDER
            </button>
          </div>
        </div>
        {/* Cart Summary */}
        <div className="sticky p-4 px-6 bg-white border border-gray-200 shadow-md h-72 top-20 ">
          <h2 className="px-2 pb-4 font-semibold text-gray-500 uppercase text-md ">
            Price Details
          </h2>
          <hr />
          <div className="grid w-full grid-cols-2 px-2 pt-4 mb-4 gap-y-4 ">
            <p className="text-start">Price</p>
            <p className="text-end">${total.total.toFixed(2)}</p>
            <p className="text-start">Discount</p>
            <p className="text-green-600 text-end">-0</p>
            <p className="text-start">Delivery Charges</p>
            <p className="text-green-600 text-end">Free</p>
            <div className="flex justify-between col-span-2 py-4 font-bold border-dashed border-y-2">
            <p>Total</p>
            <p>${total.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

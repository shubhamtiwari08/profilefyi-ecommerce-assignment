import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/index";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Store/slices/cartSlice";
import CartProductCard from "../Components/ProductCard/CartProductCard";
import { Link } from "react-router-dom";

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

  const DiscountedAmount = items.reduce(
    (acc, curr) =>
      acc + curr.price * ((100 - curr.discount) / 100) * (curr.quantity || 1),
    0
  );

  const TotalDiscount = (total.total - DiscountedAmount).toFixed(2);
  useEffect(() => {
    handleTotal();
  }, [items]);

  console.log(items.length);

  return (
    <>
      {items.length !== 0 ? (
        <>
          <h2 className="p-2 mb-4 text-xl font-bold bg-white text-blue-500 shadow-sm w-[80%] mx-auto mt-2 border border-gray-200">
            Your Cart
          </h2>
          <div className="grid md:grid-cols-[60%_auto] gap-y-2 gap-x-4 w-[80%] mx-auto relative">
            <div className="relative flex flex-col order-2 bg-white border border-gray-200 shadow-sm md:order-1 h-max">
              {/* Product List */}
              <div className="w-full">
                {items.map((item) => (
                  <CartProductCard itemDetails={item} key={item.id} />
                ))}
              </div>
              <div className="sticky bottom-0 flex justify-end w-full p-4 px-4 mt-4 bg-white shadow-product">
                <button className="px-4 py-2 font-semibold text-white uppercase transition-all duration-700 ease-in-out transform scale-100 bg-orange-500 opacity-100 hover:bg-orange-600">
                  PLACE ORDER
                </button>
              </div>
            </div>
            {/* Cart Summary */}
            <div className="sticky order-1 p-4 px-6 bg-white border border-gray-200 shadow-md md:order-2 h-72 top-20 ">
              <h2 className="px-2 pb-4 font-semibold text-gray-500 uppercase text-md ">
                Price Details
              </h2>
              <hr />
              <div className="grid w-full grid-cols-2 px-2 pt-4 mb-4 gap-y-4 ">
                <p className="text-start">Price</p>
                <p className="text-end">${total.total.toFixed(2)}</p>
                <p className="text-start">Discount</p>
                <p className="text-green-600 text-end">-${TotalDiscount}</p>
                <p className="text-start">Delivery Charges</p>
                <p className="text-green-600 text-end">Free</p>
                <div className="flex justify-between col-span-2 py-4 font-bold border-dashed border-y-2">
                  <p>Total</p>
                  <p>${DiscountedAmount.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center  mt-2 rounded-sm h-full bg-white border border-gray-200 w-[90%] mx-auto p-4">
          <p className="font-bold text-blue-500 uppercase bg-white ">
            Your Cart is Empty.
          </p>
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="empty"
            className="w-[30%] rounded-md"
          />
         <Link to={'/products'} >
         <button className="px-4 py-2 mt-10 font-semibold text-white uppercase transition-all duration-700 ease-in-out transform scale-100 bg-orange-500 opacity-100 hover:bg-orange-600">Browse Products</button>
         </Link>
        </div>
      )}
    </>
  );
};

export default Cart;

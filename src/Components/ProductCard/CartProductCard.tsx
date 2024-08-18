import React from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { CartItem, CartProductProps } from "../../libs/types";



const CartProductCard: React.FC<CartProductProps> = ({ itemDetails }) => {
  const dispatch = useDispatch();
  
  const { id, imageUrl, name, price, quantity, discount,description } = itemDetails;

  const ActualPrice = ((price * (100 - discount)) / 100).toFixed(2)


  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleAdd = (product: CartItem) => {
    dispatch(increaseQuantity(product));
  };

  const handleSubtract = (product: CartItem) => {
    dispatch(decreaseQuantity(product));
  };

  let disableQuantityBtn:boolean = quantity === 1 ? true : false

  return (
    <div className="flex flex-col w-full p-4 border-b border-gray-200">
      <div key={id} className="flex items-start mb-1">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover h-24 mr-4 w-28"
        />
        {/* product details */}
        <div className="flex-1">
        <h2 className="text-lg">{name}</h2>
        <p className="mb-1 text-sm text-gray-500">{description}</p>
          <div className="mb-4 font-bold text-black">
            <span className="text-xs font-normal text-gray-400 line-through">
              ${price.toFixed(2)}
            </span>
           <span > ${ActualPrice} </span>
            <span className="text-sm font-semibold text-green-700">
              {" "}
              {discount}% off
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
            <button
              className="w-6 h-6 pb-1 text-base leading-5 border border-gray-300 rounded-full cursor-pointer bg-gray-50 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
              onClick={() => handleSubtract(itemDetails)}
              disabled={disableQuantityBtn}
            >
              -
            </button>
            <input
              type="text"
              min="1"
              value={quantity || 1}
              className="w-12 px-1 text-center border border-gray-300 outline-none item-count"
            />
            <button
              className="w-6 h-6 pb-1 leading-4 border border-gray-300 rounded-full bg-gray-50"
              onClick={() => handleAdd(itemDetails)}
            >
              +
            </button>
            <button
              onClick={() => handleRemove(id)}
              className="px-4 py-2 ml-[-8px] font-semibold text-black uppercase hover:text-blue-500"
            >
              Remove
            </button>
          </div>
    </div>
  );
};

export default CartProductCard;

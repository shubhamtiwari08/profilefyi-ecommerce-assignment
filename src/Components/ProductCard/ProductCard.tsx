import { MinusCircleIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import React from "react";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  isAddedToCart: Boolean;
  description:string;
  discount:number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  onAddToCart,
  isAddedToCart,
  onRemoveFromCart,
  description,
  discount
}) => {
  return (
    <div className="group pt-4 overflow-hidden bg-white  hover:shadow-product hover:cursor-pointer h-[90%]">
      <img src={imageUrl} alt={name} className="object-contain w-full h-64" />
      {/* product detaisl */}
      <div className="p-4 pt-8 mt-4 transition duration-500 ease-in-out transform bg-white group-hover:-translate-y-10">
        <h2 className="mb-1 text-normal">{name}</h2>
        <p className="mb-1 text-xs text-gray-500">{description}</p>
        <p className="mb-4 font-bold text-black">${(price*(100 - discount)/100).toFixed(2)} <span className="text-sm font-normal text-gray-400 line-through">${price.toFixed(2)}</span><span className="text-sm font-semibold text-green-700"> {discount}% off</span></p>
        {!isAddedToCart ? (
          <button
            onClick={onAddToCart}
            className="w-full px-4 py-2 text-white transition-all ease-in-out transform scale-100 bg-yellow-500 opacity-100 hover:bg-orange-500 duration-800"
          >
           <ShoppingCartIcon className="inline-block w-6 h-6 pb-1 text-white" /> Add to Cart
          </button>
        ) : (
          <button
            onClick={onRemoveFromCart}
            className="w-full px-4 py-2 text-white transition-all ease-in-out transform scale-100 bg-red-500 opacity-100 hover:bg-red-600 duration-800"
          >
             <MinusCircleIcon className="inline-block w-6 h-6 pb-1 text-white" /> Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

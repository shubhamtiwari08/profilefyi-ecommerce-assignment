import React from "react";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  isAddedToCart: Boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  onAddToCart,
  isAddedToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="pt-4 overflow-hidden bg-white rounded-b-lg shadow-sm hover:shadow-product hover:cursor-pointer">
      <img src={imageUrl} alt={name} className="object-cover w-full h-48" />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">{name}</h2>
        <p className="mb-4 text-gray-600">${price.toFixed(2)}</p>
        {!isAddedToCart ? (
          <button
            onClick={onAddToCart}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={onRemoveFromCart}
            className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

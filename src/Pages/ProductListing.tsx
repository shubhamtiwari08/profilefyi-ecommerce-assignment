import React from 'react';
import productsData from '../Data/product.json'
import ProductCard from '../Components/ProductCard/ProductCard';



const ProductListing: React.FC = () => {

    const handleAddToCart = (productName: string) => {
        alert(`${productName} added to cart!`);
      };

  return (
    <div className="container grid grid-cols-1 gap-4 px-8 py-4 mx-auto md:grid-cols-3 md:px-16 lg:px-16 sm:grid-cols-2 lg:grid-cols-4">
    {productsData.map((product: { id: number; imageUrl: string; name: string; price: number }) => (
      <ProductCard
        key={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        onAddToCart={() => handleAddToCart(product.name)}
      />
    ))}
  </div>

  );
};

export default ProductListing;
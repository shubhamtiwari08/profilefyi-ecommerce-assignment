import React, { useEffect } from 'react';
import productsData from '../Data/product.json'
import ProductCard from '../Components/ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/index';
import { setProducts } from '../Store/slices/productSlice';
import { addToCart } from '../Store/slices/cartSlice';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }
  



const ProductListing: React.FC = () => {
    const dispatch = useDispatch()
    const products = useSelector((state:RootState) => state.product.products)

    const handleAddToCart = (product:Product) => {
      dispatch(addToCart(product));
    };
    


    useEffect(()=>{
      dispatch(setProducts(productsData))
    },[])

  return (
    <div className="container grid grid-cols-1 gap-4 px-8 py-4 mx-auto md:grid-cols-3 md:px-16 lg:px-16 sm:grid-cols-2 lg:grid-cols-4">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        onAddToCart={() => handleAddToCart(product)}
      />
    ))}
  </div>

  );
};

export default ProductListing;
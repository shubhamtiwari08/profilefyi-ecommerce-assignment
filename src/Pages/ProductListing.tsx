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
    description:string;
    discount:number;
  }
  



const ProductListing: React.FC = () => {
    const dispatch = useDispatch()
    const products = useSelector((state:RootState) => state.product.products)
    const cartItems = useSelector((state:RootState) => state.cart.items)
    

    const handleAddToCart = (product:Product) => {
      dispatch(addToCart(product));
    };


    


    useEffect(()=>{
      dispatch(setProducts(productsData))
    },[])

  return (
    <div className=' w-[98%] my-2 px-8 py-4 mx-auto bg-white relative z-[0]'>
      <div className='p-2 w-[90%] mx-auto border-b border-b-gray-200'> <p>All Products ({products.length})</p></div>
    <div className="container grid grid-cols-1 gap-4 mx-auto mt-2 md:grid-cols-3 md:px-16 lg:px-16 sm:grid-cols-2 lg:grid-cols-4">
    {products.map((product) => (
      <ProductCard
      key={product.id}
      imageUrl={product.imageUrl}
      name={product.name}
      price={product.price}
      onAddToCart={() => handleAddToCart(product)}
      isAddedToCart={cartItems.find(item => item.id === product.id)? true : false}
      discount={product.discount}
      description={product.description}
      />
    ))}
  </div>
  </div>

  );
};

export default ProductListing;
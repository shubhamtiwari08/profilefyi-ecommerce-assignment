import React from 'react';
import { CartProductListProps } from '../../libs/types';
import CartProductCard from '../ProductCard/CartProductCard';
import Button from '../Button/Button';



const CartProductList: React.FC<CartProductListProps> = ({items}) => {
  return (
    <div>
       <div className="relative flex flex-col order-2 bg-white border border-gray-200 shadow-sm md:order-1 h-max">
              {/* Product List */}
              <div className="w-full">
                {items.map((item) => (
                  <CartProductCard itemDetails={item} key={item.id} />
                ))}
              </div>
              <div className="sticky bottom-0 flex justify-end w-full p-4 px-4 mt-4 bg-white shadow-product">
                <div className="font-semibold w-44">
                <Button color="secondary">
                  PLACE ORDER
                </Button>
                </div>
              </div>
            </div>
    </div>
  );
};

export default CartProductList;
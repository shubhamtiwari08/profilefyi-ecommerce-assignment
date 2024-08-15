import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { GiftTopIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className="text-white bg-blue-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-lobster">ShipArt <span className='font-sans text-xs font-semibold text-yellow-200'>Artist's Home</span></Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <NavLink to="/products" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-700"><GiftTopIcon className="inline-block w-6 h-6 pb-1 text-white" />Products</NavLink>
              <NavLink to="/cart" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-700"><ShoppingCartIcon className="inline-block w-6 h-6 pb-1 text-white" />Cart</NavLink>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 text-blue-400 bg-blue-900 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && ( <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/products" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-blue-700">Products</a>
          <a href="/cart" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-blue-700">Cart</a>
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navbar;

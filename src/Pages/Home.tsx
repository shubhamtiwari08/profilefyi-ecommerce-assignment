import React from 'react';
import { Link } from 'react-router-dom';



const Home: React.FC = () => {
  return (
      <main >
        <div className='bg-white w-[80%] max-h-max border border-gray-200 mx-auto mt-10 flex justify-center flex-col items-center p-8'>
          <h1 className='p-1 text-xl text-blue-500 rounded-sm'>Welcome to</h1>
          <span className='px-4 py-1 text-3xl font-semibold text-white bg-yellow-300 rounded-sm'>Artist's Home</span>
           <strong className='text-blue-500 text-8xl font-lobster'>ShipArt</strong>
           <Link to={'/products'} >
         <button className="px-4 py-2 mt-10 font-semibold text-white uppercase transition-all duration-700 ease-in-out transform scale-100 bg-orange-500 opacity-100 hover:bg-orange-600">Browse Products</button>
         </Link>
        </div>
      </main>
  );
};

export default Home;
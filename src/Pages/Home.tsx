import React from 'react';



const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg shadow-lg shadow-black h-96">
              {/* Hero Section */}
              <div className="flex items-center justify-center h-full bg-blue-800 bg-center rounded-md ">
                <h2 className="p-4 text-4xl font-extrabold text-white bg-blue-900 rounded-md shadow-lg shadow-white">Welcome to ShipArt</h2>
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Sample Product Card */}
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <img src="https://example.com/product1.jpg" alt="Product 1" className="object-cover w-full h-48 rounded-md" />
                <h3 className="mt-4 text-lg font-semibold">Product Name</h3>
                <p className="mt-2 text-gray-600">$100</p>
                <button className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700">Add to Cart</button>
              </div>

              {/* Add more product cards as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
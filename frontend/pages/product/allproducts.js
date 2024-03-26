import React from "react";

const Product = () => {
  
  const products = [
    { id: 1, name: "Denim Jeans Men", price: 15, image: "/product/1.jpg" },
    { id: 2, name: "Denim Jeans Women", price: 18, image: "/product/2.jpg" },
    { id: 3, name: "Stylish Hodie", price: 25, image: "/product/3.jpg" },
    { id: 4, name: "Solid T-Shirt", price: 10, image: "/product/4.jpg" },
    { id: 5, name: "Traditional Panjabi", price: 35, image: "/product/5.jpg" },
    { id: 6, name: "Lathered Wallet", price: 5, image: "/product/6.jpg" },
    { id: 7, name: "Cool Sunglass", price: 12, image: "/product/8.jpg" },
    { id: 8, name: "Fashionable Sneakers", price: 55, image: "/product/7.jpg" },
    
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded-md"
            />
            <div>
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-500">${product.price}</p>
            </div>
            <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

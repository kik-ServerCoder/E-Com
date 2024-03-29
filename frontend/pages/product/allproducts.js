import React, { useState, useEffect, useRef } from "react";
import Header from "../custom/header";

const Product = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [units, setUnits] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isInitialRender.current) {
      console.log("Cart Items:", cartItems);
    } else {
      isInitialRender.current = false;
    }
  }, [cartItems, selectedProduct]);

  const products = [
    { id: 1, name: "Denim Jeans Men", price: 15, image: "/product/1.jpg" },
    { id: 2, name: "Denim Jeans Women", price: 18, image: "/product/2.jpg" },
    { id: 3, name: "Stylish Hoodie", price: 25, image: "/product/3.jpg" },
    { id: 4, name: "Solid T-Shirt", price: 10, image: "/product/4.jpg" },
    { id: 5, name: "Traditional Panjabi", price: 35, image: "/product/5.jpg" },
    { id: 6, name: "Leather Wallet", price: 5, image: "/product/6.jpg" },
    { id: 7, name: "Cool Sunglasses", price: 12, image: "/product/8.jpg" },
    { id: 8, name: "Fashionable Sneakers", price: 55, image: "/product/7.jpg" },
  ];

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setSelectedProduct(product);
    }
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      if (isNaN(units) || units <= 0) {
        alert("Please enter a valid positive number of units to add to cart.");
        return;
      }
      const newItem = { ...selectedProduct, units };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      if (selectedProduct) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000);
      }
      console.log(`Added ${units} units of ${selectedProduct.name} to cart.`);
      setSelectedProduct(null);
      setUnits(1);
    }
  };

  const cancelAddToCart = () => {
    setSelectedProduct(null);
    setUnits(1);
  };

  const updateCartItem = (product, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === product.id) {
        return { ...item, units: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const updateCartState = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto">
      <Header cartItems={cartItems} updateCartState={updateCartState} updateCartItem={updateCartItem} />
      
      <h1 className="text-2xl font-bold mb-4 mt-4">All Products</h1>
      {showSuccessMessage && (
        <p className="text-green-500 bg-slate-200 font-semibold text-center py-2 px-4 rounded-md">
          Product added to cart successfully!
        </p>
      )}

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
              {cartItems.find(item => item.id === product.id) ? (
                <button
                  className="mt-4 bg-green-800 text-white py-2 px-4 rounded-md cursor-not-allowed"
                  disabled
                >
                  Added
                </button>
              ) : selectedProduct && selectedProduct.id === product.id ? (
                <div className="flex items-center mt-4">
                  <button
                    className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full hover:bg-gray-300"
                    onClick={() =>
                      setUnits(units - 1 >= 1 ? units - 1 : 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    min="1"
                    className="mx-2 w-16 text-center border border-gray-300 rounded-md"
                    value={units}
                    onChange={(e) => setUnits(parseInt(e.target.value))}
                  />
                  <button
                    className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full hover:bg-gray-300"
                    onClick={() => setUnits(units + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-1 bg-gray-600 text-white py-1 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-400"
                    onClick={confirmAddToCart}
                  >
                    Confirm
                  </button>
                  <button
                    className="ml-1 bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    onClick={cancelAddToCart}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-blue-600"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

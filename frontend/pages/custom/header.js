import React, { useEffect, useState, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe('pk_test_51P9FAISFJbKurQg915A4SM4v9GYcNWNb03R9KD4UBpI9vlTnvbdL5m3M2eJoaiUwNeeneHqZTshAKg1iPyPbraos00DxojmzhN');
const Header = ({ cartItems, updateCartItem, updateCartState }) => {
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if cartItems is defined before accessing its properties
  const cartItemCount = cartItems ? cartItems.length : 0;

  const updatedPrice = (item) => {
    return item.units * item.price;
  };

  const handleQuantityChange = (item, quantity) => {
    updateCartItem(item, quantity);
  };

  const handleDeleteItem = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    updateCartState(updatedCartItems); // Update cart state in Product component
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + updatedPrice(item), 0);
  };

  const checking = async() => {
    const stripe = await stripePromise;

  try {
    // Send cart items to the server to create a checkout session
    const response = await axios.post('http://localhost:3000/create-checkout-session', { cartItems });

    // Get the session ID from the response
    const { sessionId } = response.data;

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  } catch (error) {
    console.error('Error during checkout:', error);
  }
  };

  return (
    <header
      data-theme="nord"
      className="shadow-md p-5 flex justify-between items-center ml-40 mr-40 bg-sky-400 text-black rounded-lg"
    >
      <div className="flex items-center">
        <img src="logo.png" alt="Company Logo" className="w-10 h-8 mr-2 bg-sky-400" />
        <a href='/'> 
          <span className="text-xl font-bold">E-Commerce Project <span className="text-red-500">.</span></span>
        </a>
      </div>

      <div className="flex items-center relative">
        <button className="mr-4 bg-white border border-gray-800 rounded-xl px-2 py-0.5" onClick={() => setShowCart(!showCart)}>
          <img src="/cart.svg" alt="Cart" className="w-12 h-10" />
          {cartItemCount > 0 && (
            <label className='font-bold'>Cart:(<span className="ml-1 font-bold border border-gray-200 rounded font-sans bg-transparent text-red-500">{cartItemCount}</span>)</label>
          )}
        </button>
        {/* Show cart items */}
        {cartItemCount === 0? <>  {showCart && (<span className="ml-1 font-bold border border-gray-200 rounded  bg-white h-8  text-red-600">No items were added to the cart.</span>)}
            </> :  <>{showCart && (
          
          <div ref={cartRef} className=" absolute bg-white rounded-lg shadow-md p-0 right-4 top-full mt-1 max-w-xl overflow-hidden">
            <h2 className="text-lg text-white bg-slate-800 font-semibold mx-2 my-2">Cart Items</h2>
            
            <table className="w-full">
              
              <thead>
                <tr>
                  <th className="text-center py-2 px-4 font-bold" style={{ width: '35%' }}>Product</th>
                  <th className="text-center py-2 px-4 font-bold" style={{ width: '15%' }}>Units</th>
                  <th className="text-center py-2 px-4 font-bold" style={{ width: '25%' }}>Price</th>
                  <th className="text-center py-2 px-4 font-bold" style={{ width: '25%', whiteSpace: 'nowrap' }}>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 text-gray-800 max-w-xs overflow-hidden text-left" style={{ width: '35%', whiteSpace: 'nowrap' }}>{item.name}</td>
                    
                    <td className="py-2 px-2 text-center " style={{ width: '15%' }}>
                      <div className="flex items-center justify-center border border-gray-300 rounded">
                        <button className="quantity-button  px-1.5" onClick={() => handleQuantityChange(item, item.units - 1)}>
                          -
                        </button>
                        <span className="px-2 font-bold bg-gray-200">{item.units}</span>
                        <button className="quantity-button  px-1.5" onClick={() => handleQuantityChange(item, item.units + 1)}>
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-2 px-4 text-center" style={{ width: '25%' }}>${item.price}</td>
                    <td className="py-2 text-green-500 font-bold px-4 text-right" style={{ width: '25%' }}>${updatedPrice(item)}
                     <span>  <button className="text-red-500" onClick={() => handleDeleteItem(item)}><img src="/delete.svg" alt="Cart" className=" w-8 h-4" /></button></span></td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Total Price */}
            {cartItemCount > 0 && (
            <div className="font-serif font-semibold text-lg text-gray-800 mb-2 mt-8 ml-2">
              Net Total: 
              <span className='bg-slate-800 font-sans font-bold text-green-400'>
                ${calculateTotalPrice()}
              </span ><div className='text-center'>
            <button className="bg-sky-600 rounded font-bold text-xl text-white px-2 py-1.5 mb-4 mt-4 ml-2" onClick={checking}>Check Out</button>
          </div>
            </div>
          )}
                      
                    </div>
                  )}</>}
       
                </div>
              </header>
            );
          };

export default Header;

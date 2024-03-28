import { useEffect, useState, useRef } from 'react';

const Header = ({ cartItems }) => {
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

  return (
    <header
      data-theme="nord"
      className="shadow-md p-5 flex justify-between items-center ml-40 mr-40 bg-sky-400 text-black rounded-lg"
    >
      <div className="flex items-center">
        <img src="logo.png" alt="Company Logo" className="w-10 h-8 mr-2 bg-sky-400" />
        <span className="text-xl font-bold">E-Commerce Project <span className="text-red-500">.</span></span>
      </div>

      <div className="flex items-center relative">
        <button className="mr-4" onClick={() => setShowCart(!showCart)}>
          {/* Replace 'cart.svg' with your actual cart icon */}
          <img src="/cart.svg" alt="Cart" className="w-8 h-8" />
          {cartItems.length > 0 && (
            <span className="ml-1 text-red-500">{cartItems.length}</span>
          )}
        </button>
        {/* Show cart items */}
        {showCart && (
          <div ref={cartRef} className="absolute bg-white rounded-lg shadow-md p-4 right-0 top-full mt-2 max-w-xs overflow-hidden">
            <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4 font-semibold">Product</th>
                  <th className="text-left py-2 px-4 font-semibold">Price</th>
                  <th className="text-left py-2 px-4 font-semibold">Units</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">{item.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

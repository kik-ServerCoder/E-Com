import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P9FAISFJbKurQg915A4SM4v9GYcNWNb03R9KD4UBpI9vlTnvbdL5m3M2eJoaiUwNeeneHqZTshAKg1iPyPbraos00DxojmzhN');
const handleSubscribe = async (subscriptionType) => {
  try {
    const stripe = await stripePromise;
    const response = await axios.post('http://localhost:3000/create-subs-session', {
      subscriptionType,
    });

    const { sessionId } = response.data;
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    // Optionally, handle the error (e.g., show a message to the user)
  }
};


const SubsPage = () => (<>
  <header
      data-theme="nord"
      className="shadow-md p-5 flex justify-between items-center ml-40 mr-40 bg-sky-400 text-black rounded-lg"
    ><div className="flex items-center">
    <img src="/product/logo2.png" alt="Company Logo" className="w-10 h-8 mr-2 bg-sky-400" />
    <a href='/'> 
      <span className="text-xl font-bold">E-Commerce Project <span className="text-red-500">.</span></span>
    </a>
  </div>
</header>


<div className="flex justify-center gap-8 mt-10">
  {/* Monthly Subscription Box */}
  <div className="w-64 p-6 bg-gray-200 rounded-lg shadow-lg text-center">
    <h2 className="text-xl font-bold mb-4">Monthly Subscription</h2>
    <p className="text-2xl">$100 USD</p> {/* Corrected font size */}
    <p className="text-gray-600 mb-6">Get access to premium features on a monthly basis.</p>
    <button onClick={() => handleSubscribe('monthly')}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200 shadow-md"
      
    >
      Subscribe
    </button>
  </div>

  {/* Annual Subscription Box */}
  <div className="w-64 p-6 bg-gray-200 rounded-lg shadow-lg text-center">
    <h2 className="text-xl font-bold mb-4">Annual Subscription</h2>
    <p className="text-2xl">$500 USD</p> {/* Corrected font size */}
    <p className="text-gray-600 mb-6">Get access to premium features on an annual basis.</p>
    <button onClick={() => handleSubscribe('yearly')}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200 shadow-md"
     
    >
      Subscribe
    </button>
  </div>
</div>

  
  
  </>
);

export default SubsPage;

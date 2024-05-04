import React from 'react';


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
    <button
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
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200 shadow-md"
     
    >
      Subscribe
    </button>
  </div>
</div>

  
  
  </>
);

export default SubsPage;

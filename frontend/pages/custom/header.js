import { useEffect, useState } from 'react';
import Link from 'next/link';


const Header = () => {
  
 

  return (
    <header data-theme="nord" className="shadow-md p-5 flex justify-between items-center ml-40 mr-40 bg-sky-400 text-black rounded-lg">
      <div className="flex items-center">
          
              <img src="logo.png" alt="Company Logo" className="w-10 h-8 mr-2 bg-sky-400" />
           
        <span className="text-xl font-bold">E-Commmerce Project <span className='text-red-500'>.</span></span>
      </div>

      <nav>
        <ul className="flex space-x-4">
         
         
         
          <li>
         

          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        
          
      
      </div>
    </header>
  );
};

export default Header;

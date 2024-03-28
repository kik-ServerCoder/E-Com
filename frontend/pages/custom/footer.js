import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-sky-400 p-4 md:p-4 flex items-center mt-10">
      <div className="mb-4 md:mb-0 ml-14 md:mr-4">
        <div className="mt-100 ml-40 mr-40">
          <p className="text-red-800 font-bold text-4xl mb-2">E-Commerce<span className="text-black">.</span></p>
          <p className="text-white ml-1 font-bold text-sm mb-2">
            Copyright©ecom All Rights Reserved
          </p>
        </div>
        
      </div>

      <div>
       
        {/* <button
          onClick={() => router.back()}
          className="text-white ml-4 cursor-pointer bg-sky-600 hover:bg-gray-600 py-2 px-4 rounded"
        >
          Go Back
        </button> */}
            
            <Link href="/">
              <b className="text-gray-300 ml-4 cursor-pointer bg-gray-600 hover:bg-gray-800 py-2 px-4 rounded">Home</b>
            </Link>
          
     
          
      
      </div>
     
    </div>
   
  );
};

export default Footer;

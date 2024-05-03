import { useRouter } from 'next/router';
import React from 'react';

const Cancel = () => {
  const router = useRouter(); // This is the Next.js way to navigate

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Payment Cancelled</h1>
      <p className="mt-4 text-lg text-gray-600">
        It seems like your payment was cancelled or failed to process.
      </p>
      <div className="mt-6 space-x-4">
        
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => router.push('/')}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Cancel;

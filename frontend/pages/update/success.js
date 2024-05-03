import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Success = () => {
  const router = useRouter();

  // Extract query parameters from the URL
  const { orderId, status } = router.query;

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">Thank You for Your Purchase!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your order has been successfully processed.
      </p>

      {orderId && (
        <div className="mt-6 bg-white shadow-lg p-6 rounded">
          <h2 className="text-xl font-semibold text-gray-800">Order Information:</h2>
          <p className="mt-2 text-gray-700">Order ID: {orderId}</p>
          <p className="text-gray-700">Payment Status: {status}</p>
        </div>
      )}

      <Link
        href="/"
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Success;

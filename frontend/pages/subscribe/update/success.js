import Link from 'next/link';


const Success = () => {
  

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">Thank You for Your Subscription!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your subscription has been successfully processed.
      </p>

      

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

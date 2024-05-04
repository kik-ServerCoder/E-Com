import "@/styles/globals.css";

import Footer from "./custom/footer"; // Adjust this import based on your project structure
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter(); // If you need navigation within App component
  
  return (
    <div data-theme="nord">
      
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

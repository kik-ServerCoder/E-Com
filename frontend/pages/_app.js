import "@/styles/globals.css";
import Footer from "./custom/footer";
export default function App({ Component, pageProps }) {
  
  return <> <div data-theme="nord">
  
  <Component {...pageProps} />
  <Footer/>
</div></> 
}

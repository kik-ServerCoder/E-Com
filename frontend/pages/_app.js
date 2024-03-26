import "@/styles/globals.css";
import Header from "./custom/header";
import Footer from "./custom/footer";
export default function App({ Component, pageProps }) {
  
  return <> <div data-theme="nord">
  <Header/>
  <Component {...pageProps} />
  <Footer/>
</div></> 
}

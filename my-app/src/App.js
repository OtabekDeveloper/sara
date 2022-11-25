import './App.css';
import Router from "./router/Router"
import { CartProvider } from "react-use-cart";
import {BrowserRouter} from "react-router-dom"

function App(){
  return(
    <>
   <BrowserRouter>
    <CartProvider>
      <Router />
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

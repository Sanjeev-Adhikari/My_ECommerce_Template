import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import "./App.css"
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Register from './pages/auth/Register';
import Products from './pages/products/Products';
import MyOrders from './pages/orders/MyOrders';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';



//importing pages
const Home = lazy(()=> import('./pages/home/Home'));
const Login = lazy(()=> import( './pages/auth/Login'));


const App = () => {
   React.useEffect(()=>{
      AOS.init({
         offset: 100,
         duration: 800,
         easing: "ease-in-sine",
         delay: 100
      });
      AOS.refresh();
},[])
  return (
  <>
  <Nav />
   <BrowserRouter>
<Suspense fallback= {<Loader />}>
<Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/products' element= {<Products />} />
      <Route path='/orders' element= {<MyOrders />} />
      <Route path='/cart' element= {<Cart />} />
      <Route path='/checkout' element= {<Checkout />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/register' element= {<Register />} />
   </Routes>
</Suspense>
   </BrowserRouter>
   <Footer />
  </>
  )
}

export default App;

import React, {useState} from 'react'
import ProductList from './assets/ProductList'
import NavBar from './Components/Navbar/Navbar';
import CartProvider from './Components/Cart/store/CartProvider';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = ()=>{
    setCartShown(true);
  }
  const hideCartHandler = ()=>{
    setCartShown(false);
  }
  return (
    <div>
      <CartProvider>
      <NavBar showCartHandler={showCartHandler}></NavBar>

        <ProductList showCartHandler={showCartHandler} cartShown={cartShown} hideCartHandler={hideCartHandler}/>
        {cartShown && <Cart hideCartHandler={hideCartHandler}></Cart>}
      </CartProvider>
    </div>
  )
}

export default App

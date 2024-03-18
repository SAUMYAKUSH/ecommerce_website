
import React, {useState} from 'react'
import ProductList from './assets/ProductList'

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
        <ProductList showCartHandler={showCartHandler} cartShown={cartShown} hideCartHandler={hideCartHandler}/>

    </div>
  )
}

export default App

export const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

    import React from 'react'
import Cart from '../Components/Cart/Cart'
    
    function ProductList({showCartHandler,cartShown, hideCartHandler}) {
        const list = productsArr.map((item)=>(
            <li key={item.id}>{item.title}{item.price} <img src={item.imageUrl}/></li>
        ))
      return (
        <div>
          <ul>
            <button onClick={showCartHandler}>Cart</button>
            {list}
            {cartShown && <Cart list={list} hideCartHandler={hideCartHandler}/>}
          </ul>
        </div>
      )
    }
    
    export default ProductList
    

    
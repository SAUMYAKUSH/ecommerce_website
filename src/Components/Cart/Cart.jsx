import React from 'react'

function Cart({list, hideCartHandler}) {
  return (
    <div>
      <ul>
        
        <button onClick={hideCartHandler}>Hide Cart</button>
      </ul>
    </div>
  )
}

export default Cart

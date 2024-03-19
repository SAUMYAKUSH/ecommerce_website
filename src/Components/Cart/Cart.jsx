
import React, {useContext} from "react";
import CartContext from './store/Cart-Context';
import { Card, Button } from "react-bootstrap";

function Cart({list, hideCartHandler}) {
  const cartCxt = useContext(CartContext);

  return (
    <div>
      <ul>
        {
          cartCxt.items.map((item)=>(
            <li key={item.id}>
              <Card style={{width: "18rem"}}>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Img variant="top" src={item.imageUrl}/>
                <Card.Body>
                  <Card.Text>{item.price} {item.quantity}</Card.Text>
                  <Button onClick={hideCartHandler} variant="primary">Close</Button>
                </Card.Body>
              </Card>

            </li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default Cart;

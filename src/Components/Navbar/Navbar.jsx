import React, { useContext } from 'react'
import CartContext from '../Cart/store/Cart-Context'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function NavBar({showCartHandler}) {
    const cartCxt = useContext(CartContext);
    let cartQuantity = 0;
    cartCxt.items.forEach((item)=>{
        return cartQuantity = cartQuantity + Number(item.quantity);
    })
  return (
    <div>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
            <Nav className='me-auto' style={{background:'black',display:'flex'}} >
                <Nav.Link href='#home' style={{color:'white'}}>Home</Nav.Link>
                <Nav.Link href='#link' style={{color:'white'}}>Store</Nav.Link>
                <Nav.Link href='#link' style={{color:'white'}}>About</Nav.Link>
                <Button onClick={showCartHandler} style={{marginLeft:'1000px'}} variant='primary'>Cart{cartQuantity}</Button>
            </Nav>
        </Container>

      </Navbar>
      <h1 style={{background: 'grey', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '2px'}}>The Generics</h1>
    </div>
  )
}

export default NavBar;

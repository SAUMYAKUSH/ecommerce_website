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
 import React, { useContext } from 'react'

 import CartContext from '../Components/Cart/store/Cart-Context'
 import { Button, Card, Col, Container, Row } from 'react-bootstrap'
    
       const ProductList=()=>{
        const cartCxt = useContext(CartContext);
        const addToCartHandler =(data)=>{
            cartCxt.addItem(data);
        }
       
      return (
        <div>
          <ul>
            <Container>
                <Row>
                    {productsArr.map((item,index)=>(
                        <Col key={index} md={6} className='mb-5'>
                            <Card style={{width:"18rem"}}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Img variant='top' src={item.imageUrl}/>
                            <Card.Body>
                                <Card.Text>{item.price}</Card.Text>
                                <Button onClick={()=>addToCartHandler(item)} variant='primary'>Add to Cart</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
          </ul>
        </div>
      )
    }
    
    export default ProductList
    

    
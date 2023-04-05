import React from 'react'
import Header from './Header'
//import Homes from './Homes'

//import  {Card} from   'react-bootstrap'

import { Row,Col,ListGroup,Image,Form, Button,Card} from 'react-bootstrap'

import { menuData } from '../data';
import { Link } from 'react-router-dom';

function Cards() {

    const {menuItems } = menuData
    
  return (

    <>
    <section className=' min-h-[3190px]  lg:min-h-[1090px] bg-testimonial '>

        <Header/>

        <div className='container mx-auto'>

            <div>
                <div className='h2 capitalize text-center my-60 text-white lg:my-24'>Your Card </div>
            </div>
            

<Row className='mx-20'>

<Col md = {8} >
    <ListGroup  variant='flush' className='max-h-[250px]   '>
        {menuItems.map((item,index)=>{
      const {image,name,price,description}  = item

      
      return <div className='rounded-3xl py-2  '>
        <ListGroup.Item key = {index} className='bg-pink-300/20' >
            <Row>
                <Col md = {2}>
                    <Link to = '/'>
                        <Image src = {image} alt = '' fluid rounded/>
                    </Link>
               </Col>
               <Col md={2}>

<Link to = '/' style={{ textDecoration: 'none' }}> <h4  className='text-black mt-6'>{name}</h4></Link>


</Col>
               <Col md = {2} className='mt-6 mb-8 mr-8'>
                {price} DA
               </Col>

               <Col md = {2} className='mt-6 mb-8 mr-8'>

<select name="gender"  className='w-24 h-8 rounded-2xl text-center'>
                
<option value='1' selected> 1</option>

<option value="2">2</option>

<option value="3">3</option>

<option value="4">4</option>

  <option value="5">5</option>

  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  
  
  </select>

               </Col>
               <Col md={1}>
                    <Button type='button' className='btn mb-8 mt-2 bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black hover:text-[15px] ' variant = 'light' >delete</Button>
                  </Col>

            </Row>

        </ListGroup.Item>
      
        </div>

        }
      



        
        )}

    </ListGroup>
</Col>






<Col md={4} className='relative top-[2300px] lg:top-6 '>

  <Card className='' >
    <ListGroup variant='flush' >
      <ListGroup.Item className='mt-8 mb-8' >
        <h2 className='mb-8'> subTotal items :  <span className='text-red-700 '>1</span>  items</h2>
        <h2 className='mb-8'>Tax: DA </h2>

       <h2 className='mb-8'>Total  Price : 200 DA</h2>

      </ListGroup.Item>

      <ListGroup.Item>
        <Button type = 'button' className=' py-3 px-3 my-3 mx-5 btn mb-8 mt-2 bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black hover:text-[15px]' 
         >

          Proceed To Checkout
        
        </Button>

      </ListGroup.Item>

    </ListGroup>

  </Card>



</Col>

</Row>


        </div>

    </section>
    </>
  
  )

}

export default Cards

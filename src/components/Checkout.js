import React,{ useState } from 'react'

import Header from './Header'

import { Form,Button} from 'react-bootstrap'

import { useNavigate } from 'react-router'

import FormContainer from '../smallcomponent/FormContainer'

import CheckoutSteps from '../smallcomponent/CheckoutSteps'


function Checkout() {

    const history = useNavigate()

    const  [adress,setAdress] = useState('')

    const  [city,setCity] = useState('')

    const  [postal,setPostal] = useState('')
    
    const  [country,setCountry] = useState('')





    const sumbitHandler = () =>{

        history('/payement')

    }



  return (

    <section className=' min-h-[1290px]  lg:min-h-[800px] bg-testimonial '>

        <Header />


        <FormContainer>

<CheckoutSteps step1 step2  />

<h1 className='h2 capitalize text-center mb-8  '> Shipping</h1> 

<Form onSubmit={sumbitHandler}>
    
  <Form.Group controlId  = 'adress'>
      <Form.Label className=' mx-[200px] text-xl text-bold text-white lg:mx-[260px]' >Adress</Form.Label>
      <Form.Control className='input  lg:w-[500px] mx-auto' required type='text' placeholder='Enter Adress' value = {adress} onChange={(e)=>setAdress(e.target.value)} >
      </Form.Control>
  </Form.Group>


  <Form.Group controlId  = 'city'>
      <Form.Label className=' mx-[200px] text-xl text-bold text-white lg:mx-[260px]'>City</Form.Label>
      <Form.Control className='input  lg:w-[500px] mx-auto' required type='text' placeholder='Enter City' value = {city} onChange={(e)=>setCity(e.target.value)} >

      </Form.Control>

      </Form.Group>

      <Form.Group controlId  = 'postal'>

<Form.Label className=' mx-[200px] text-xl text-bold text-white lg:mx-[260px]'>Postal</Form.Label>
<Form.Control className='input  lg:w-[500px] mx-auto' required type='text' placeholder='Enter Postal' value = {postal} onChange={(e)=>setPostal(e.target.value)} >
</Form.Control>
</Form.Group>

  <Form.Group controlId  = 'country'>
      <Form.Label className=' mx-[200px] text-xl text-bold text-white lg:mx-[260px]'>Country</Form.Label>
      <Form.Control  className='input  lg:w-[500px] mx-auto mb-28 lg:mb-2 ' required type='text' placeholder='Enter Country' value = {country} onChange={(e)=>setCountry(e.target.value)} >
      </Form.Control>

  </Form.Group>


  
  <Button type='submit' variant = 'primary' className='mt-8 text-xl mx-auto btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black  w-60'  > Continue</Button>

  
</Form>

</FormContainer>






    </section>
  )
}

export default Checkout

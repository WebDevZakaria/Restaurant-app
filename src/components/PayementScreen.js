import React,{useState} from 'react'

import { Form,Button,Col} from 'react-bootstrap'
import FormContainer from '../smallcomponent/FormContainer'
import CheckoutSteps from '../smallcomponent/CheckoutSteps'
import Header from './Header'


function PayementScreen() {

   
    const [payementMethod,setPayementMethod] = useState('Paypal')


    


  return (

    <section className=' min-h-[1290px]  lg:min-h-[800px] bg-testimonial '>
        <Header />


    <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <Form>

            <Form.Group className='mb-8 mx-[200px] text-white'>
                <Form.Label as='legend'>Select Method</Form.Label>
                <Col>

                <Form.Check type='radio' label='Credit Card' id='paypal' name='payementMethod' checked onChange={(e)=>setPayementMethod(e.target.value)}>
                </Form.Check>

                </Col>
            </Form.Group>

            <Form.Group className='mx-[200px] text-white'>
                <Form.Label as='legend'>Select Method</Form.Label>
                <Col>

                <Form.Check type='radio' label='Paypal ' id='paypal' name='payementMethod' checked onChange={(e)=>setPayementMethod(e.target.value)}>
                </Form.Check>

                </Col>
            </Form.Group>

            <Button type='submit' variant = 'primary' className='mt-20 text-xl mx-auto btn bg-gray-600 hover:bg-pink-200/80 cursor-pointer hover:text-black  w-60'> Continue</Button>

        </Form>

      
    </FormContainer>
    </section>
  )
}

export default PayementScreen

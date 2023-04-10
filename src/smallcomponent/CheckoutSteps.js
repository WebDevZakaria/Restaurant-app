import React from 'react'

import { Nav } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'


function CheckoutSteps({step1,step2,step3,step4}) {

  return (

    <Nav className='relative top-60 lg:top-28 justify-center mb-64 lg:mb-32 font-bold  text-xl  lg:text-[25px]   '>

        <Nav.Item>

            {step1 ? (

                <LinkContainer to='/Login'>
                    <Nav.Link className=' text-green-700'>Login</Nav.Link>

                </LinkContainer>
            ):
            <Nav.Link disabled> Login</Nav.Link>
            }

        </Nav.Item>



        <Nav.Item>
        {step2 ? (
                <LinkContainer to='/login/shipping'>

                <Nav.Link className=' text-green-700'> Shipping</Nav.Link>

            </LinkContainer>


            ):
            <Nav.Link disabled> Shipping</Nav.Link>

            }
        </Nav.Item>




        <Nav.Item>
        {step3 ? (
                <LinkContainer to='/payement'>

                <Nav.Link className=' text-green-700' > payement</Nav.Link>

            </LinkContainer>


            ):
            <Nav.Link disabled> Payement</Nav.Link>


            }
        </Nav.Item>




        <Nav.Item>
        {step4 ? (
                <LinkContainer to='/placeorder'>

                <Nav.Link className=' text-green-700'> Place Order</Nav.Link>

            </LinkContainer>


            ):
            <Nav.Link disabled> Place Order</Nav.Link>
            
            }
        </Nav.Item>










    </Nav>
    
  )

}

export default CheckoutSteps


import React from 'react'
import { Container } from 'react-bootstrap'
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import '../Components/Services.css'

export const Services = () => {
  return (
    <>
        <Container fluid className='services'>
          <div className="ctns">
            <div className="cmns">
              <h1><FaShippingFast /></h1>
              <h3>FREE SHIPPING</h3>
              <p>All orders over ₹150</p>
            </div>
            <div className="cmns">
              <h1><GiReturnArrow /></h1>
              <h3>FREE RETURNS</h3>
              <p>Money back in 15 days</p>
            </div>
            <div className="cmns">
              <h1><GiMoneyStack /></h1>
              <h3>OUICK PAYMENT</h3>
              <p>100% secure payment</p>
            </div>
            <div className="cmns">
              <h1><RiCustomerService2Line /></h1>
              <h3>24/7 SUPPORT</h3>
              <p>Get quick support</p>
            </div>
          </div>
        </Container>
    </>
  )
}


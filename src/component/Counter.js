// import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

export default function Counter() {
  const ResponsiveCounter = styled.div`
  @media (max-width:768px){
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    .counter-wrapper {
      display-flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:100%;
    }
    .counter-items{
      font-size:2.2rem;
    }
    .counter-row{
      text-align: center;
    }

  }
  `;
  const customerProps = useSpring({
    val: 180,
    from: { val: 0 },
    config: { duration: 4000 }
  });

  const commercialProps = useSpring({
    val: 60,
    from: { val: 0 },
    config: { duration: 3600 }
  });

  const resProps = useSpring({
    val: 120,
    from: { val: 0 },
    config: { duration: 2450 }
  });

  const coffeeProps = useSpring({
    val: 8653,
    from: { val: 0 },
    config: { duration: 4000 }
  });

  return (
    <ResponsiveCounter>
      <Container className='counter-wrapper'>
        <Row className='counter-row'>
          <Col>
            <animated.div className=' counter-items'>
              {customerProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          {/* <Col> */}
          <h3 className='counter-title'>Number of Happy Customers</h3>
          {/* </Col> */}
        </Row>
        <Row className='counter-row'>
          <Col>
            <animated.div className=' counter-items'>
              {resProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          <Col></Col>
          {/* <Col> */}
          <h3 className='counter-title'>Number of Residential Projects</h3>
          {/* </Col> */}
        </Row>
        <Row className='counter-row'>
          <Col>
            <animated.div className=' counter-items'>
              {commercialProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          <Col>
            <h3 className='counter-title'>Number of Commercial Projects</h3>
          </Col>
        </Row>
        <Row className='counter-row'>
          <Col>
            <animated.div className=' counter-items'>
              {coffeeProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          <Col>
            <h3 className='counter-title'>Cups of Coffee</h3>
          </Col>
        </Row>
      </Container>
    </ResponsiveCounter>
  );
}

// import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

export default function Counter() {
  const ResponsiveCounter = styled.div`
  @media (max-width:618px){
    display:none;
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
      <Container className='count-wrapper'>
        <Row className='counter-row1'>
          <Col>
            <animated.div className=' counter-items'>
              {customerProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          <Col>
            <animated.div className=' counter-items'>
              {resProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          <Col>
            <animated.div className=' counter-items'>
              {commercialProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
          <Col>
            <animated.div className=' counter-items'>
              {coffeeProps.val.to((val) => Math.floor(val))}
            </animated.div>
          </Col>
        </Row>
        <Row className='counter-row2'>
          <Col>
          <h3 className='counter-title'>Number of Happy Customers</h3>
          </Col>
          <Col>
          <h3 className='counter-title'>Number of Residential Projects</h3>
          </Col>
          <Col>
            <h3 className='counter-title'>Number of Commercial Projects</h3>
          </Col>
          <Col>
            <h3 className='counter-title-coffee'>Cups of Coffee</h3>
          </Col>
        </Row>
      </Container>
    </ResponsiveCounter>
  );
}

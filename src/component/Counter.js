import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Row, Col, Container} from 'react-bootstrap';

export default function Counter() {
  // Need to figure a way to use state in the useSpring function
  //   const [num, setNum]=useState(500)

    // const props = useSpring({
    //   val: num,
    //   from: { val: 0 },
    //   config: { duration: 4000 }
    // });

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
      <Container>
      
          {/* <animated.div className='counter'>
        {props.val.to((val) => Math.floor(val))}
        </animated.div>
    <h3>state practice</h3> */} 
       
    <div className='counter-wrapper'> 
       
      <Row>
         <Col>
           <animated.div className=' counter-items'>
             {customerProps.val.to((val) => Math.floor(val))}
           </animated.div>
         </Col>
         <Col>
           <h3 className='counter-title'>Number of Happy Customers</h3>
             </Col>
      </Row>
       <Row>
             <Col>
          <animated.div className=' counter-items'>
            {resProps.val.to((val) => Math.floor(val))}
           </animated.div>
        </Col>
        <Col></Col>
         <Col>
           <h3 className='counter-title'>Number of Residential Projects</h3>
         </Col>
      </Row>
       <Row>
         <Col>
           <animated.div className=' counter-items'>
             {commercialProps.val.to((val) => Math.floor(val))}
           </animated.div>
        </Col>
         <Col>
           <h3 className='counter-title'>Number of Commercial Projects</h3>
         </Col>
      </Row>
       <Row>
         <Col>
           <animated.div className=' counter-items'>
             {coffeeProps.val.to((val) => Math.floor(val))}
          </animated.div>
         </Col>
        <Col>
          <h3 className='counter-title'>Cups of Coffee</h3>
        </Col>
       </Row>
    </div>
    </Container> 
  );
}

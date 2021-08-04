import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Will need to add media query  for md and sm in separate style sheet or inline
import { Spin as Hamburger } from 'hamburger-react';
import { useTransition, animated } from 'react-spring';
import {Menu} from './Menu'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  //   const transitions = useTransition(isOpen, {
  //     from: { opacity: 0, transform: 'translateX(-100%)' },
  //     enter: { opacity: 1, transform: 'translateX(0%)' },
  //     leave: { opacity: 0, transform: 'translateX(-100%)' }
  //   });
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
   
  const closeMenu =() =>{
      setOpen(!isOpen)
  }
    return (
        <Container className='nav-container'>
      <Row>
        <Col className='nav-quote-btn'>
          <Button className='quote-btn'>Free Quote</Button>
        </Col>

        <Col className='navbar-icons'>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-facebook-f'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-linkedin'></i>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <i className='fas fa-hard-hat fa-3x'></i>{' '}
            <span className=' logo'>GP Excavation</span>
          </div>
          <nav>
            <ul className='link-items'>
              <li>
                <Link to='/home' className='desktop-links'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='desktop-links'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/services' className='desktop-links'>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/projects' className='desktop-links'>
                  Projects
                </Link>
              </li>
              <li>
                <Link to='/blog' className='desktop-links'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/contact' className='desktop-links'>
                  Contact
                </Link>
              </li>
            </ul>
            
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onClick={() => setOpen(!isOpen)}
              />

              {isOpen && <Menu onClick={()=>setOpen(!isOpen)}/>}
        
{/* 
              transitions(
                 ({ props, item, key }) =>
                 item && (
                     <animated.div
                     key={key}
                     style={props}
                     >
                  
                   </animated.div>
                 )
                 )}
     } */}
                
          </nav>
        </Col>
      </Row>
    </Container>
  );
};
export default NavBar;

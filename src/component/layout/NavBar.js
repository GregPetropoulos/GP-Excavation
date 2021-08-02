import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Will need to add media query  for md and sm in separate style sheet or inline

const NavBar = () => {
  return (
    <Container className='nav-container'>

        <Row>
          <Col className='nav-quote-btn'>
            <Button className='quote-btn'>Free Quote</Button>
          </Col>

          <Col className='navbar-icons'>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-linkedin'></i>
            <i className='fab fa-facebook-f'></i>
          </Col>
        </Row>
<Row>
    <Col>
        <nav>
          <ul className='link-items'>
          <div>
            <i className='fas fa-hard-hat'></i>{' '}
            <span className=' logo'>GP Excavation</span>
          </div>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          {/* </Col> */}
        </nav>
    </Col>
      </Row>
    </Container>
  );
};

export default NavBar;

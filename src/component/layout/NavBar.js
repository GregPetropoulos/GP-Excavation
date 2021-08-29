import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// Will need to add media query  for md and sm in separate style sheet or inline
import { Spin as Hamburger } from 'hamburger-react';
import { MobileMenu } from '../MobileMenu';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const ResponsiveMenu = styled.div`
    @media (min-width: 768px) {
      display: none;
    }
  `;

  const HideDesktopNavBar = styled.div`
    @media (max-width: 768px) {
      display: none;
    }
  `;

  // hamburger state
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Container className='nav-container'>
        <Row>
          <Col className='nav-quote-btn'>
            <Link to='/quote'>
              <button className='quote-btn'>Free Quote</button>
            </Link>
          </Col>
          <Col className='follow-heading'>
            <h3>Follow us</h3>
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
            <HideDesktopNavBar>
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
                    <Link to='/service' className='desktop-links'>
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
                {/* new hamburger */}
              </nav>
            </HideDesktopNavBar>
          </Col>
        </Row>
        <ResponsiveMenu>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            label='Show menu'
            onClick={() => setOpen(!isOpen)}
            color='whitesmoke'
            size={40}
            className='hamburger'
          />
          <div className='hamburger-spacer'></div>
          {isOpen ? <MobileMenu onClick={closeMenu} /> : ''}
        </ResponsiveMenu>
      </Container>
    </>
  );
};
export default NavBar;

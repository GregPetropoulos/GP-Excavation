import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Spin as Hamburger } from 'hamburger-react';
import SocialIcons from '../SocialIcons';

const NavBar = () => {
  // const [menuVisible, setMenuVisible] = useState(false);

  const ResponsiveMenu = styled.div`
    @media (min-width: 768px) {
      display: none;
    }
    @media (max-width: 768px) {
      // .mobilenav {
      //   z-index:9999;
      //   width:100%;
      //   height:100%;
      //   position:relative;
      // }
      .link-items {
        // position:absolute;
        background-color: #000;
        width: 100%;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: solid 4px whitesmoke;
        z-index: 99999;
      }

      .desktop-links {
        width: 100%;
        height: 100%;
        color: #ffc500;
        background-color: #000;
        transition: all 1.4s ease-out;
      }
      .desktop-links:hover,
      .desktop-links:focus {
        color: #000;
        background-color: #ffc500;
        border-radius: 9px;
        width: 100%;
        height: 100%;
        padding: 2px;
        margin: 5px;
      }
    }
  `;
  const ResponsivePhone = styled.div`
    @media (max-width: 320px) {
      display: none;
    }
  `;
  const HideDesktopNavBar = styled.div`
    @media (max-width: 768px) {
      display: none;
       {
      }
    }
  `;
  const ResponsiveLogo = styled.div`
  @media (max-width:450px){
    .logo-container {
      display: flex;
      flex-direction:column;
      width:100%;
      justify-content:center;

    }
    .logo-container i{
     text-align:center;
    }
    .logo{
      text-align:center;
      width:100%;
    }
    `;
  // hamburger state
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(!isOpen);
  };
  const animateFrom = { opacity: 0, x: -600 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <Container className='nav-container'>
      <ResponsivePhone>
        <Row className='nav-phone-row'>
          <Col className='nav-phone'>
            <i className='fas fa-mobile-alt fa-2x'></i>
            <a href='tel:760-605-2024'>760-605-2024</a>
          </Col>
        </Row>
      </ResponsivePhone>
      {/* <Row className='nav-top-row'>
        <Col className='nav-quote-btn'>
          <Link to='/quote'>
            <button className='quote-btn'>Free Quote</button>
          </Link>
        </Col>
      </Row> */}
      <SocialIcons />
      <Row>
        <Col>
          <ResponsiveLogo>
            <div className='logo-container'>
              <i className='fas fa-hard-hat fa-3x'></i>{' '}
              <span className=' logo'>GP Excavation</span>
            </div>
          </ResponsiveLogo>
        </Col>
      </Row>
      <HideDesktopNavBar>
        <Row>
          <Col>
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
                  <Link to='/license' className='desktop-links'>
                    License
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='desktop-links'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </HideDesktopNavBar>
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
        {/* {isOpen ? <motion.nav onClick={closeMenu} /> : ''} */}
        {isOpen ? (
          <motion.nav
            onClick={closeMenu}
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            transition={{
              delay: 0.05,
              x: { type: 'spring', stiffness: 39 },
              default: { duration: 1.6 }
            }}
            className='mobilenav'
          >
            <ul className='link-items'>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
              >
                <Link to='/home' className='desktop-links'>
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
              >
                <Link to='/about' className='desktop-links'>
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
              >
                <Link to='/service' className='desktop-links'>
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.4 }}
              >
                <Link to='/projects' className='desktop-links'>
                  Projects
                </Link>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.5 }}
              >
                <Link to='/license' className='desktop-links'>
                  License
                </Link>
              </motion.li>
              <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.6 }}
              >
                <Link to='/contact' className='desktop-links'>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        ) : (
          ''
        )}
      </ResponsiveMenu>
    </Container>
  );
};
export default NavBar;

import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SocialIcons = () => {
  return (
    <Row>
      <Col className='follow-heading'>
        <h3>Follow us</h3>
      </Col>
      <Col className='navbar-icons'>
        <a
          href='https://www.instagram.com/gpexcavation/?hl=en'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <a
          href='https://www.facebook.com/GPExcavation-103086617779983/?ref=py_c'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='123' target='_blank' rel='noreferrer'>
          <i className='fab fa-twitter'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/greg-petropoulos-1172b68b/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </Col>
    </Row>
  );
};

export default SocialIcons;

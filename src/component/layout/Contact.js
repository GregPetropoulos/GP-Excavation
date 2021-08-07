import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <Row>
      <Col className='contact-icons'>
        <i className='fas fa-home'>Spring Valley Lake, California, United States</i>
        <i className='fas fa-mobile-alt'>760-605-2024</i>
        <i className='fas fa-envelope-square '>
          <a
            href='mailto: gpetroconstruction@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#08a7ce' }}
          >
            gpetroconstruction@gmail.com
          </a>
        </i>
      </Col>
      <Button>
        <Link to='/quote-form'>Quote</Link>
      </Button>
    </Row>
  );
};

export default Contact;

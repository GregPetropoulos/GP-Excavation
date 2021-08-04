import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <Row>
      <Col>
        <i class='fas fa-home'>Spring Valley Lake, California, United States</i>
        <i class='fas fa-envelope-square'>760-605-2024</i>
        <i class='fas fa-mobile-alt'>
          <a
            href='mailto: gregpetropoulos@yahoo.com'
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

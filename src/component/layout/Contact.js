import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Contact = () => {
  return (
    <Container>
      <Button>
        <Link to='/quote-form'>Quote</Link>
      </Button>
      <Footer/>
    </Container>
  );
};

export default Contact;

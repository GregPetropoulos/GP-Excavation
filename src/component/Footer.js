import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import EmailForm from './EmailForm';

const Footer = () => {
  return (
    <Container>
      <Row className='footer-wrapper'>
        <Col className='footer-about-wrapper'>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </Col>
        {/* <Row> */}
          <Col className='footer-contact-wrapper'>
            <h1>Contact Us</h1>
            <p> 1234 Main St. Spring Valley Lake, CA 12345</p>
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
        {/* </Row> */}
        <Col className='footer-newsletter-wrapper'>
          <h1>Newsletter</h1>
          <p>You can trust us. we only send promo offers, not a single spam.</p>
          <EmailForm/>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import EmailForm from './EmailForm';
import {Link} from 'react-router-dom';

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
          <Col className='footer-contact-wrapper'>
            <h1>Contact Us</h1>
            <p> 1234 Main St. Spring Valley Lake, CA 12345</p>
            <div className='email-phone-icon-wrapper'>

            <i className='fas fa-envelope-square fa-2x'></i>
              <a
              className='footer-email-link'
                href='mailto: gpetroconstruction@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                >
                gpetroconstruction@gmail.com
              </a>

            <i className='fas fa-mobile-alt fa-2x'></i>760-605-2024
                </div>
                <Col className='quote-col'>
          <Link to='/quote'>
            <button className='free-quote-btn-global'>Custom Quote</button>
          </Link>
          </Col>
          </Col>
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

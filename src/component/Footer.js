import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import EmailForm from './EmailForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const FooterResponsive = styled.div`
    @media (max-width: 585px) {
      .footer-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;

      }
      .footer-about-wrapper {
        border-right: #ffc500;
      }
      .footer-contact-wrapper {
        border-right: #ffc500;
        text-align:center;
        width:100%;
      }

    }
  `;
  return (
    <FooterResponsive>
      <Row className='footer-wrapper'>
        <Col className='footer-contact-wrapper' xs={6}>
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
            <i className='fas fa-mobile-alt fa-2x'></i>
            <a href='760-605-2024'>760-605-2024</a>
          </div>
          <Col className='quote-col'>
            <Link to='/quote'>
              <button className='free-quote-btn-global'>Custom Quote</button>
            </Link>
          </Col>
        </Col>
        <Col className='footer-newsletter-wrapper'>
          <h1>Newsletter</h1>
          <p>We only send promo offers, not a single spam.</p>
            <EmailForm />
        </Col>
      </Row>
    </FooterResponsive>
  );
};

export default Footer;

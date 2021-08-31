import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Row, Button } from 'react-bootstrap';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_unyefet',
        'contact_form',
        e.target,
        'user_7uuVTJTCnZ8xpy2qeVaJr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <Row className='form-main-row'>
        
        <h1>Free Quote</h1>
        <input type='hidden' name='contact_number' />
        <Col lg={12} md={8} sm={4}>
          <label>Name</label>
          <input
            className='form-name'
            type='text'
            name='name'
            placeholder='name'
          />
        </Col>
        <Col>
          <label>Email</label>
          <input
            className='form-email'
            type='email'
            name='email'
            placeholder='email'
          />
        </Col>
        <Col>
          <label>Subject</label>
          <input
            className='form-budget'
            type='text'
            name='subject'
            placeholder='subject'
          />
        </Col>
        <Col>
          <label>Budget</label>
          <input
            className='form-budget'
            type='numbers'
            name='budget'
            placeholder='$'
          />
        </Col>
        <Col className='label-text-combo'>
          <label className='form-label-message'>Message</label>
          <textarea
            className='form-message'
            name='message'
            placeholder='Scope and description'
          />
        </Col>
        <Row className ='form-btn-row'>
          <Col>
            <input className='form-btn' type='submit' value='Send'></input>
          </Col>
      </Row>
        </Row>
    </form>
  );
}

import React from 'react';
import emailjs from 'emailjs-com';
import { Row, Col } from 'react-bootstrap';

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
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
        <Row>
          <h1>Free Quote</h1>
        </Row>
        <Row>
          <input type='hidden' name='contact_number' />
          <label htmlFor='name'>
            Name:
            <Col>
              <input
                className='form-name'
                type='text'
                name='name'
                placeholder='name'
                required
              />
            </Col>
          </label>
        </Row>
        <Row>
          <label htmlFor='email'>
            Email:
            <Col>
              <input
                className='form-email'
                type='email'
                name='email'
                placeholder='email'
                required
              />
            </Col>
          </label>
        </Row>
        <Row>
          <label htmlFor='phone'>
            Phone: (ex:619-123-1234)
            <Col>
              <input
                className='form-phone'
                type='tel'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                name='phone'
                placeholder='619-123-1234'
                required
              />
            </Col>
          </label>
        </Row>
        <Row>
          <label htmlFor='subject'>
            Subject:
            <Col>
              <input
                className='form-budget'
                type='text'
                name='subject'
                placeholder='subject'
              />
            </Col>
          </label>
        </Row>
        <Row>
          <label htmlFor='budget'>
            Budget:
            <Col>
              <input
                className='form-budget'
                type='numbers'
                name='budget'
                placeholder='$'
                required
              />
            </Col>
          </label>
        </Row>
        <Row>
          <Col className='label-text-combo'>
            <label htmlFor='message' className='form-label-message'>
              Message
            </label>
            <textarea
              className='form-message'
              name='message'
              placeholder='Scope and description'
              required
            />
          </Col>
        </Row>
        <Row className='form-btn-row'>
          <input className='form-btn' type='submit' value='Send'></input>
        </Row>
      </Row>
    </form>
  );
}

import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Row } from 'react-bootstrap';
// Will need to get the email to be sent to db or gpc
console.log('NEWSLETTER ID CHECK',process.env.REACT_APP_YOUR_NEWS_TEMPLATE_ID)
const EmailForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `gmail`,
        process.env.REACT_APP_YOUR_NEWS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          alert('Message Sent, We will get back to you shortly');
          console.log(result.text);
        },
        (error) => {
          alert('An error occurred, Please try again');
          console.log(error.text);
        }
        );
        
        e.target.reset();
      }
  return (
    <form  onSubmit={sendEmail}>
        <Row >
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
            <Row className='form-btn-row'>
          <button className='newsletter-button' type='submit' value='Send'>Submit</button>
        </Row>
          </Row>  
          </form>  
  );
};

export default EmailForm;

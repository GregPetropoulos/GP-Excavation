import React from 'react';
import { Col, Row } from 'react-bootstrap';
// Will need to get the email to be sent to db or gpc

const EmailForm = () => {
  return (
    <form>
      <label>Email</label>
      <input
        className='form-email'
        type='email'
        name='email'
        placeholder='email'
      />
      <button className='newsletter-button' type='submit' value= 'send'>Submit</button>
    </form>
  );
};

export default EmailForm;

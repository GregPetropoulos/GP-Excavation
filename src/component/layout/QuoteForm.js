import React from 'react';
import {Row} from 'react-bootstrap';

const QuoteForm = () => {
  return (
      <Row>

    <h1>
      Call us for a quote, and we will connect you with the services to fit your
      needs.
    </h1>
    <form>
    <fieldset>
             <label>
               <p>Name</p>
               <input name="name" />
             </label>
           </fieldset>
           <button type="submit">Submit</button>
    </form>
      </Row>
  );
};

export default QuoteForm;

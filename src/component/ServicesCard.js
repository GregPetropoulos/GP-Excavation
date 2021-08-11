import React from 'react';
import Card from 'react-bootstrap/Card';

// show this card image if card is flipped on mouse over

const ServicesCard = ({ title, text, cardIcon, cardFlipped }) => {
  return (
    <Card className='flipcard-container'>
{cardFlipped? (<Card.Img variant='top' src='holder.js/100px180px' />):''}

      <div className='card-icon'>{cardIcon}</div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text text={text}>
          <p>{text}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;

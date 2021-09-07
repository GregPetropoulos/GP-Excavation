import React from 'react'
import { Col, Row, } from 'react-bootstrap';
import Gpeowner from '../images/gpe-owner.jpeg';


const FieldImage = () => {
    return (
        <Col className ='field-image-col'>
          <img className='field-image' src={Gpeowner} alt='greg-petropoulos-owner'></img>
          <h2> Fieldwork</h2>
        </Col>
    )
}

export default FieldImage

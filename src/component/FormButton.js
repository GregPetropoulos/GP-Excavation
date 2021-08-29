import React from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button'

const FormButton = () => {
    return (
        <>
        <Link to='/quote'>
        <Button  variant ='primary' type='button'>Free Quote</Button>
      </Link>
      </>
    )
}

export default FormButton

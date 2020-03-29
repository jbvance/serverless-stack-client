import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({ message }) => {
  return(
    <Alert bsStyle="danger" style={{textAlign: "center"}}>
    <strong>Oops, something went wrong!<br /></strong> {message}    
  </Alert>
  );
};

export default Error;
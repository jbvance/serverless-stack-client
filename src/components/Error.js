import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({ message }) => {
  return(
    <Alert bsStyle="danger">
    <strong>Error:</strong> {message}
    good.
  </Alert>
  );
};

export default Error;
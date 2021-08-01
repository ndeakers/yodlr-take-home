import React from "react";
import Alert from "react-bootstrap/Alert";

function DisplayError({ errors }) {
  let errorString = errors.join(". ")
  return (
    <div>
      <Alert variant="danger">{errorString}</Alert>
    </div>
  )
}

export default DisplayError;
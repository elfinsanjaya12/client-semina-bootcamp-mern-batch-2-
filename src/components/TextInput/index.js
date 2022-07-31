import React from 'react';
import { Form } from 'react-bootstrap';

function TextInput({ name, value, type, onChange, placeholder }) {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value} // state
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;

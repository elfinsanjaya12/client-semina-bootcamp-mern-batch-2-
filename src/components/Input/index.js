import React from 'react';
import PropTypes from 'prop-types';
export default function Input({ type = 'name', value, name, handleChange }) {
  return (
    <input type={type} name={name} value={value} onChange={handleChange} />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

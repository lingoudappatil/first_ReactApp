// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>  Click me
      {text}
    </button>
  );
}; 

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;
